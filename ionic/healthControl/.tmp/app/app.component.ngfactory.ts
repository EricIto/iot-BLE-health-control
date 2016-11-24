/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/platform/platform';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from 'ionic-angular/components/menu/menu';
import * as import12 from '@angular/core/src/linker/query_list';
import * as import13 from 'ionic-angular/components/content/content';
import * as import14 from 'ionic-angular/components/list/list';
import * as import15 from '@angular/common/src/directives/ng_for';
import * as import16 from 'ionic-angular/components/nav/nav';
import * as import17 from '../node_modules/ionic-angular/components/menu/menu.ngfactory';
import * as import18 from 'ionic-angular/components/menu/menu-controller';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from 'ionic-angular/config/config';
import * as import21 from 'ionic-angular/util/keyboard';
import * as import22 from '@angular/core/src/zone/ng_zone';
import * as import23 from 'ionic-angular/gestures/gesture-controller';
import * as import24 from '../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import25 from 'ionic-angular/components/app/app';
import * as import26 from 'ionic-angular/navigation/view-controller';
import * as import27 from 'ionic-angular/components/tabs/tabs';
import * as import28 from '@angular/core/src/linker/template_ref';
import * as import29 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import30 from '../node_modules/ionic-angular/components/nav/nav.ngfactory';
import * as import31 from 'ionic-angular/navigation/nav-controller-base';
import * as import32 from '@angular/core/src/linker/component_factory_resolver';
import * as import33 from 'ionic-angular/transitions/transition-controller';
import * as import34 from 'ionic-angular/navigation/deep-linker';
import * as import35 from 'ionic-angular/components/item/item';
import * as import36 from 'ionic-angular/components/menu/menu-toggle';
import * as import37 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import38 from 'ionic-angular/components/icon/icon';
import * as import39 from '../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import40 from 'ionic-angular/util/form';
import * as import41 from 'ionic-angular/components/navbar/navbar';
import * as import42 from 'ionic-angular/components/toolbar/toolbar';
var renderType_MyApp_Host:import0.RenderComponentType = (null as any);
class _View_MyApp_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _MyApp_0_4:import3.MyApp;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MyApp_Host0,renderType_MyApp_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MyApp0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MyApp_0_4 = new import3.MyApp(this.parentInjector.get(import8.Platform));
    this._appEl_0.initComponent(this._MyApp_0_4,[],compView_0);
    compView_0.create(this._MyApp_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.MyApp) && (0 === requestNodeIndex))) { return this._MyApp_0_4; }
    return notFoundResult;
  }
}
function viewFactory_MyApp_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_MyApp_Host === (null as any))) { (renderType_MyApp_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_MyApp_Host0(viewUtils,parentInjector,declarationEl);
}
export const MyAppNgFactory:import10.ComponentFactory<import3.MyApp> = new import10.ComponentFactory<import3.MyApp>('ng-component',viewFactory_MyApp_Host0,import3.MyApp);
const styles_MyApp:any[] = [];
var renderType_MyApp:import0.RenderComponentType = (null as any);
class _View_MyApp0 extends import1.AppView<import3.MyApp> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Menu_0_4:import11.Menu;
  _query_Content_0_0:import12.QueryList<any>;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  /*private*/ _appEl_3:import2.AppElement;
  _Content_3_4:import13.Content;
  _text_4:any;
  _el_5:any;
  _List_5_3:import14.List;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _appEl_7:import2.AppElement;
  _TemplateRef_7_5:any;
  _NgFor_7_6:import15.NgFor;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  /*private*/ _appEl_12:import2.AppElement;
  _Nav_12_4:import16.Nav;
  _text_13:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MyApp0,renderType_MyApp,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-menu',(null as any));
    this.renderer.setElementAttribute(this._el_0,'role','navigation');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import17.viewFactory_Menu0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Menu_0_4 = new import11.Menu(this.parentInjector.get(import18.MenuController),new import19.ElementRef(this._el_0),this.parentInjector.get(import20.Config),this.parentInjector.get(import8.Platform),this.renderer,this.parentInjector.get(import21.Keyboard),this.parentInjector.get(import22.NgZone),this.parentInjector.get(import23.GestureController));
    this._query_Content_0_0 = new import12.QueryList<any>();
    this._appEl_0.initComponent(this._Menu_0_4,[],compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._text_2 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_3 = this.renderer.createElement((null as any),'ion-content',(null as any));
    this._appEl_3 = new import2.AppElement(3,0,this,this._el_3);
    var compView_3:any = import24.viewFactory_Content0(this.viewUtils,this.injector(3),this._appEl_3);
    this._Content_3_4 = new import13.Content(this.parentInjector.get(import20.Config),new import19.ElementRef(this._el_3),this.renderer,this.parentInjector.get(import25.App),this.parentInjector.get(import21.Keyboard),this.parentInjector.get(import22.NgZone),this.parentInjector.get(import26.ViewController,(null as any)),this.parentInjector.get(import27.Tabs,(null as any)));
    this._appEl_3.initComponent(this._Content_3_4,[],compView_3);
    this._text_4 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_5 = this.renderer.createElement((null as any),'ion-list',(null as any));
    this._List_5_3 = new import14.List(this.parentInjector.get(import20.Config),new import19.ElementRef(this._el_5),this.renderer,this.parentInjector.get(import23.GestureController));
    this._text_6 = this.renderer.createText(this._el_5,'\n      ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_5,(null as any));
    this._appEl_7 = new import2.AppElement(7,5,this,this._anchor_7);
    this._TemplateRef_7_5 = new import28.TemplateRef_(this._appEl_7,viewFactory_MyApp1);
    this._NgFor_7_6 = new import15.NgFor(this._appEl_7.vcRef,this._TemplateRef_7_5,this.parentInjector.get(import29.IterableDiffers),this.ref);
    this._text_8 = this.renderer.createText(this._el_5,'\n    ',(null as any));
    this._text_9 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_3.create(this._Content_3_4,[
      [],
      [].concat([
        this._text_4,
        this._el_5,
        this._text_9
      ]
      ),
      []
    ]
    ,(null as any));
    this._text_10 = this.renderer.createText((null as any),'\n',(null as any));
    this._query_Content_0_0.reset([this._Content_3_4]);
    this._Menu_0_4.menuContent = this._query_Content_0_0.first;
      compView_0.create(this._Menu_0_4,[[].concat([
        this._text_1,
        this._text_2,
        this._el_3,
        this._text_10
      ]
    )],(null as any));
    this._text_11 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_12 = this.renderer.createElement(parentRenderNode,'ion-nav',(null as any));
    this._appEl_12 = new import2.AppElement(12,(null as any),this,this._el_12);
    var compView_12:any = import30.viewFactory_Nav0(this.viewUtils,this.injector(12),this._appEl_12);
    this._Nav_12_4 = new import16.Nav(this.parentInjector.get(import26.ViewController,(null as any)),this.parentInjector.get(import31.NavControllerBase,(null as any)),this.parentInjector.get(import25.App),this.parentInjector.get(import20.Config),this.parentInjector.get(import21.Keyboard),new import19.ElementRef(this._el_12),this.parentInjector.get(import22.NgZone),this.renderer,this.parentInjector.get(import32.ComponentFactoryResolver),this.parentInjector.get(import23.GestureController),this.parentInjector.get(import33.TransitionController),this.parentInjector.get(import34.DeepLinker,(null as any)));
    this._appEl_12.initComponent(this._Nav_12_4,[],compView_12);
    compView_12.create(this._Nav_12_4,[],(null as any));
    this._text_13 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._text_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import28.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import15.NgFor) && (7 === requestNodeIndex))) { return this._NgFor_7_6; }
    if (((token === import14.List) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._List_5_3; }
    if (((token === import13.Content) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._Content_3_4; }
    if (((token === import11.Menu) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._Menu_0_4; }
    if (((token === import16.Nav) && (12 === requestNodeIndex))) { return this._Nav_12_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changed:boolean = true;
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changed = false;
    const currVal_0:any = this._Nav_12_4;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._Menu_0_4.content = currVal_0;
      changed = true;
      this._expr_0 = currVal_0;
    }
    if (changed) { this._appEl_0.componentView.markAsCheckOnce(); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Menu_0_4.ngOnInit(); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_3_4.ngOnInit(); }
    changes = (null as any);
    const currVal_2:any = this.context.pages;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgFor_7_6.ngForOf = currVal_2;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_2,currVal_2);
      this._expr_2 = currVal_2;
    }
    if ((changes !== (null as any))) { this._NgFor_7_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_7_6.ngDoCheck(); }
    const currVal_3:any = this.context.rootPage;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._Nav_12_4.root = currVal_3;
      this._expr_3 = currVal_3;
    }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this._Content_3_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_3,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Nav_12_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_3_4.ngOnDestroy();
    this._Menu_0_4.ngOnDestroy();
  }
}
export function viewFactory_MyApp0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.MyApp> {
  if ((renderType_MyApp === (null as any))) { (renderType_MyApp = viewUtils.createRenderComponentType('/home/davikawasaki/GitHub/healthcontrol/ionic/healthControl/.tmp/app/app.html',0,import9.ViewEncapsulation.None,styles_MyApp,{})); }
  return new _View_MyApp0(viewUtils,parentInjector,declarationEl);
}
class _View_MyApp1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Item_0_4:import35.Item;
  _ItemContent_0_5:import35.ItemContent;
  _MenuToggle_0_6:import36.MenuToggle;
  _ToolbarItem_0_7:import37.ToolbarItem;
  _query_Label_0_0:import12.QueryList<any>;
  _query_Button_0_1:import12.QueryList<any>;
  _query_Icon_0_2:import12.QueryList<any>;
  _query_Button_0_3:import12.QueryList<any>;
  _text_1:any;
  _el_2:any;
  _Icon_2_3:import38.Icon;
  _text_3:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_MyApp1,renderType_MyApp,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','item item-block');
    this.renderer.setElementAttribute(this._el_0,'ion-item','');
    this.renderer.setElementAttribute(this._el_0,'menuToggle','');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import39.viewFactory_Item0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Item_0_4 = new import35.Item(this.parent.parentInjector.get(import40.Form),this.parent.parentInjector.get(import20.Config),new import19.ElementRef(this._el_0),this.renderer);
    this._ItemContent_0_5 = new import35.ItemContent();
    this._MenuToggle_0_6 = new import36.MenuToggle(this.parent.parentInjector.get(import18.MenuController),new import19.ElementRef(this._el_0),this.parent.parentInjector.get(import26.ViewController,(null as any)),this.parent.parentInjector.get(import41.Navbar,(null as any)));
    this._ToolbarItem_0_7 = new import37.ToolbarItem(this.parent.parentInjector.get(import20.Config),new import19.ElementRef(this._el_0),this.renderer,this.parent.parentInjector.get(import42.Toolbar,(null as any)),this.parent.parentInjector.get(import41.Navbar,(null as any)));
    this._query_Label_0_0 = new import12.QueryList<any>();
    this._query_Button_0_1 = new import12.QueryList<any>();
    this._query_Icon_0_2 = new import12.QueryList<any>();
    this._query_Button_0_3 = new import12.QueryList<any>();
    this._appEl_0.initComponent(this._Item_0_4,[],compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_2,'role','img');
    this._Icon_2_3 = new import38.Icon(this.parent.parentInjector.get(import20.Config),new import19.ElementRef(this._el_2),this.renderer);
    this._text_3 = this.renderer.createText((null as any),'',(null as any));
    this._query_Label_0_0.reset([]);
    this._Item_0_4.contentLabel = this._query_Label_0_0.first;
    compView_0.create(this._Item_0_4,[
      [],
      [],
      [].concat([
        this._text_1,
        this._el_2,
        this._text_3
      ]
      ),
      [],
      []
    ]
    ,(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import38.Icon) && (2 === requestNodeIndex))) { return this._Icon_2_3; }
    if (((token === import35.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._Item_0_4; }
    if (((token === import35.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._ItemContent_0_5; }
    if (((token === import36.MenuToggle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._MenuToggle_0_6; }
    if (((token === import37.ToolbarItem) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._ToolbarItem_0_7; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._MenuToggle_0_6.menuToggle = currVal_2;
      this._expr_2 = currVal_2;
    }
    const currVal_4:any = import4.interpolate(1,'',this.context.$implicit.icon,'');
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._Icon_2_3.name = currVal_4;
      this._expr_4 = currVal_4;
    }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_0_1.dirty) {
        this._query_Button_0_1.reset([]);
        this._Item_0_4._buttons = this._query_Button_0_1;
        this._query_Button_0_1.notifyOnChanges();
      }
      if (this._query_Button_0_3.dirty) {
        this._query_Button_0_3.reset([]);
        this._ToolbarItem_0_7._buttons = this._query_Button_0_3;
        this._query_Button_0_3.notifyOnChanges();
      }
      if (this._query_Icon_0_2.dirty) {
        this._query_Icon_0_2.reset([this._Icon_2_3]);
        this._Item_0_4._icons = this._query_Icon_0_2;
        this._query_Icon_0_2.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Item_0_4.ngAfterContentInit(); }
    }
    const currVal_3:any = this._MenuToggle_0_6.isHidden;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementProperty(this._el_0,'hidden',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_5:any = this._Icon_2_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_2,'hide',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = import4.interpolate(1,'\n        ',this.context.$implicit.title,'\n      ');
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setText(this._text_3,currVal_6);
      this._expr_6 = currVal_6;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._Icon_2_3.ngOnDestroy();
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.openPage(this.context.$implicit)) !== false);
    const pd_1:any = ((<any>this._MenuToggle_0_6.toggle()) !== false);
    return ((true && pd_0) && pd_1);
  }
}
function viewFactory_MyApp1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_MyApp1(viewUtils,parentInjector,declarationEl);
}