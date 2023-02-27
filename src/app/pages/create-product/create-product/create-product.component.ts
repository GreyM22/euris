import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from "../../../interfaces/product.interface";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SNACKBAR_OPTIONS} from "../../../consts/snackbar/snackbar.options";
import {ProductsService} from "../../../services/state-data/products.service";
import {firstValueFrom, Observable, Subject, takeUntil} from "rxjs";
import {MatDialogRef} from "@angular/material/dialog";
type ProductForm = {
  [Property in keyof Omit<Product, 'id' | 'reviews'>]: FormControl<Product[Property]>;
} & {
  reviews: FormArray<FormControl<NonNullable<Product['reviews']>[number]>>
};
@Component({
  selector: 'euris-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateProductComponent implements OnInit, OnDestroy {
  constructor(
    private snackBar: MatSnackBar,
    private productService: ProductsService,
    private dialogRef: MatDialogRef<CreateProductComponent>
  ) { }
  private readonly localStorageKey = 'create-product-value';
  private readonly onDestroy$ = new Subject<void>();
  readonly loading$: Observable<boolean> = this.productService.loading$(this.productService.ADD_PRODUCT);
  readonly form: FormGroup<ProductForm> = new FormGroup<ProductForm>({
    title: new FormControl<Product["title"]>(
      '',
      {nonNullable: true, validators: [Validators.required, Validators.minLength(3)]}
    ),
    category: new FormControl<Product["category"]>('', {nonNullable: true, validators: [Validators.required]}),
    price: new FormControl<Product["price"]>(0, {nonNullable: true, validators: Validators.required}),
    employee: new FormControl<Product["employee"]>(
      '',
      {nonNullable: true, validators: [Validators.required, Validators.minLength(3)]}
    ),
    description: new FormControl<Product["description"]>(
      '',
      {nonNullable: true, validators: [Validators.required, Validators.minLength(5)]}
    ),
    reviews: new FormArray<FormControl<NonNullable<Product['reviews']>[number]>>([
      new FormControl<NonNullable<Product["reviews"]>[number]>('', {nonNullable: true})
    ])
  });

  get title(): FormControl<Product["title"]> {
    return this.form.controls.title;
  }
  get category(): FormControl<Product["category"]> {
    return this.form.controls.category;
  }
  get price(): FormControl<Product["price"]> {
    return this.form.controls.price;
  }
  get employee(): FormControl<Product["employee"]> {
    return this.form.controls.employee;
  }
  get description(): FormControl<Product["description"]> {
    return this.form.controls.description;
  }
  get reviews(): FormArray<FormControl<NonNullable<Product['reviews']>[number]>> {
    return this.form.controls.reviews;
  }
  ngOnInit(): void {
    /* in case the modal was close by accident we save its data in local storage*/
    const obj = JSON.parse(localStorage.getItem(this.localStorageKey) || '{}');
    const newProductData: Omit<Product, 'id'> = {
      title: obj.title || '',
      category: obj.category || '',
      price: obj.price || 0,
      employee: obj.employee || '',
      description: obj.description || '',
      reviews: obj.reviews || ['']
    };
    this.form.patchValue(newProductData);
    this.form.valueChanges.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(res => localStorage.setItem(this.localStorageKey, JSON.stringify(res)));
  }

  addReview() {
    this.form.controls.reviews.push(
      new FormControl<NonNullable<Product['reviews']>[number]>('', {nonNullable: true})
    );
  }

  removeReview(index: number) {
    this.form.controls.reviews.removeAt(index);
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.snackBar.open('Please fill all the data correctly', '', SNACKBAR_OPTIONS);
      return;
    }
    const title = this.title.value
    const category = this.category.value
    const price = this.price.value
    const employee = this.employee.value
    const description = this.description.value
    const reviews = this.reviews.value
    await firstValueFrom(this.productService.addProduct$({
      title,
      category,
      price,
      employee,
      description,
      reviews
    }));
    this.close();
  }

  close() {
    localStorage.removeItem(this.localStorageKey);
    this.dialogRef.close();
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
