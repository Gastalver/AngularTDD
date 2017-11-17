import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('debe crear el componente app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`debe tener como título 'TTD TODO app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('TTD TODO app');
  }));
  it('debe publicar el título en una etiqueta h1', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('TTD TODO app');
  }));
  it('debe tener una propiedad llamada items', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.items).toBeDefined();
  }));
  it('debe tener tres elementos en la propiedad items',async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.items.length).toBe(3);
  }));
});

describe('Método add', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  });

  it('debe provocar que haya 4 elementos en la lista', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const comp = fixture.componentInstance;
    comp.add('New-Item');
    fixture.detectChanges();
    expect(comp.items.length).toBe(4);
  }));

  it('debe añadir un elemento al final de la lista',async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const comp = fixture.componentInstance;
    var lastIndexOfList = comp.items.length - 1;
    expect(comp.items[lastIndexOfList]).toEqual('New-Item');
  }))

});
