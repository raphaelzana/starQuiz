import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoPlayComponent } from './botao-play.component';

describe('BotaoPlayComponent', () => {
  let component: BotaoPlayComponent;
  let fixture: ComponentFixture<BotaoPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
