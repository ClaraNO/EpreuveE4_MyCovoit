import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MessageriePage } from './messagerie.page';

describe('MessageriePage', () => {
  let component: MessageriePage;
  let fixture: ComponentFixture<MessageriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageriePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
