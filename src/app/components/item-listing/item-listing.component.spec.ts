import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemListingComponent } from './item-listing.component';

describe('ItemListingComponent', () => {
  let component: ItemListingComponent;
  let fixture: ComponentFixture<ItemListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListingComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
