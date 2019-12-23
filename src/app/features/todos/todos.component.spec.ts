import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TodosComponent } from './todos.component';
import { AppState } from 'src/app/reducers';
import { MemoizedSelector, Store } from '@ngrx/store';
import { TodoEntity } from './reducers/list.reducer';
import { selectAllTodos } from './reducers';
import { By } from '@angular/platform-browser';
import { loadListData } from './actions/list.actions';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let mockStore: MockStore<AppState>;
  let mockListSelector: MemoizedSelector<AppState, TodoEntity[]>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      providers: [provideMockStore()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.get(Store);
    mockListSelector = mockStore.overrideSelector(selectAllTodos,
      [{ id: '85', description: 'Wash Car', completed: false }]
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load the books', () => {
    component.load();
    component.list$.subscribe(todos => {
      expect(todos).toEqual([{ id: '85', description: 'Wash Car', completed: false }]);
    });
  });
  xit('the first item should be Wash Car ', () => {
    component.ngOnInit();
    component.load();
    spyOn(mockStore, 'dispatch').and.callThrough();
    const el = fixture.debugElement.query(By.css('[data-todo-item="1"]')).nativeElement as HTMLElement;
    expect(el.innerText).toBe('Wash Car');
  });
  it('should dispatch the action', () => {
    const action = loadListData();

    spyOn(mockStore, 'dispatch').and.callThrough();
    component.load();
    expect((mockStore.dispatch as any).calls.first().args[0].type).toBe(action.type);
  });
});
