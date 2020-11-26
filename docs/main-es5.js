(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+DiT":
    /*!***********************************************!*\
      !*** ./src/app/core/auth/auth.interceptor.ts ***!
      \***********************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function DiT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor() {
          _classCallCheck(this, AuthInterceptor);
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var idToken = localStorage.getItem('Token');

            if (idToken) {
              var cloned = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + idToken)
              });
              return next.handle(cloned);
            } else {
              return next.handle(req);
            }
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ctorParameters = function () {
        return [];
      };

      AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
      /***/
    },

    /***/
    "+OAD":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/add-plant-modal/add-plant-modal.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OAD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button type=\"button\" class=\"btn btn-primary d-none\" data-toggle=\"modal\" data-target=\"#addPlantModal\" #addPlantModal></button>\n\n<div class=\"modal fade\" id=\"addPlantModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Dodaj nowe urządzenie</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" data-dismiss=\"modal\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"addPlantForm\">\n          <div class=\"form-group\">\n            <label class=\"form-check-label d-none\" for=\"nameAddPlant\">Wprowadź nazwę</label>\n            <input type=\"email\" class=\"form-control\" id=\"nameAddPlant\" aria-describedby=\"emailHelp\" placeholder=\"Podaj nazwę\" formControlName=\"name\">\n            <div *ngIf=\"addPlantForm.controls.name.invalid && submitted\" class=\"alert alert-danger\">\n              Podaj poprawną nazwę\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-check-label mb-2\" for=\"level\">Wybierz level</label>\n            <select class=\"form-control\" id=\"level\" formControlName=\"level\">\n              <option>1</option>\n              <option>2</option>\n              <option>3</option>\n              <option>4</option>\n              <option>5</option>\n            </select>\n          </div>\n          <div *ngIf=\"addPlantForm.controls.level.invalid && submitted\" class=\"alert alert-danger\">\n            Podaj poprawny poziom.\n          </div>\n          <div class=\"row p-0 m-0 justify-content-center\">\n            <button type=\"submit\" class=\"btn btn-add col-6\" (click)=\"add()\" data-dismiss=\"modal\">Dodaj!</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "/Vpn":
    /*!****************************************************************!*\
      !*** ./src/app/components/shared/navbar/navbar.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function Vpn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "/cV3":
    /*!***************************************************************!*\
      !*** ./src/app/components/main-page/main-page.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function cV3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".text-div {\n  padding: 100px 0 100px 0;\n  margin: 0;\n}\n\n.logoDiv {\n  font-size: 30px;\n  position: relative;\n  margin: 0;\n  background-color: var(--main);\n  min-height: 280px;\n}\n\n.imgDiv {\n  margin-left: 100px;\n  padding-top: 20px;\n}\n\n.img-logo {\n  border-radius: 25px;\n}\n\n.panelDiv {\n  padding-left: 100px;\n  font-size: 21px;\n}\n\n.panelDiv > div {\n  cursor: pointer;\n  margin-top: 15px;\n  transition: all ease 0.4s;\n}\n\n.panelDiv > div i {\n  transition: all ease 0.5s;\n}\n\n.panelDiv > div:hover {\n  transform: scale(1.04);\n}\n\n.smallPanel {\n  width: 100%;\n  position: absolute;\n  bottom: 22px;\n}\n\n@media (min-width: 992px) {\n  .text-div {\n    min-height: calc(100vh);\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0Msa0JBQUE7RUFDQSxpQkFBQTtBQUdEOztBQURBO0VBQ0UsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQUtGOztBQUhBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFNRjs7QUFKQTtFQUNFLHlCQUFBO0FBT0Y7O0FBTEE7RUFDRSxzQkFBQTtBQVFGOztBQU5BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVNGOztBQU5BO0VBQ0U7SUFDRSx1QkFBQTtJQUNBLFVBQUE7RUFTRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtZGl2IHtcclxuICBwYWRkaW5nOiAxMDBweCAwIDEwMHB4IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5sb2dvRGl2IHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcclxuICBtaW4taGVpZ2h0OiAyODBweDtcclxufVxyXG4uaW1nRGl2IHtcclxuIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5pbWctbG9nbyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG4ucGFuZWxEaXYge1xyXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcbi5wYW5lbERpdiA+IGRpdiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcclxufVxyXG4ucGFuZWxEaXYgPiBkaXYgIGkge1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNXM7XHJcbn1cclxuLnBhbmVsRGl2ID4gZGl2OmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xyXG59XHJcbi5zbWFsbFBhbmVsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyMnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAudGV4dC1kaXYge1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCk7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! E:\SmartPlant\SmartPlantFrontend\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1He7":
    /*!*********************************************************!*\
      !*** ./src/app/components/plants/plants.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function He7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxhbnRzL3BsYW50cy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "1rRq":
    /*!**********************************************************************************!*\
      !*** ./src/app/components/modals/edit-plant-modal/edit-plant-modal.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: EditPlantModalComponent */

    /***/
    function rRq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditPlantModalComponent", function () {
        return EditPlantModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_plant_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-plant-modal.component.html */
      "vVB/");
      /* harmony import */


      var _edit_plant_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-plant-modal.component.scss */
      "3xZd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/modals/modals.service */
      "Sond");
      /* harmony import */


      var _core_main_main_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/main/main.service */
      "EFeq");

      var EditPlantModalComponent = /*#__PURE__*/function () {
        function EditPlantModalComponent(modals, main) {
          _classCallCheck(this, EditPlantModalComponent);

          this.modals = modals;
          this.main = main;
          this.submitted = false;
        }

        _createClass(EditPlantModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.modals.openEditPlant.subscribe(function (res) {
              _this.editPlantForm.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](res.id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));

              _this.editPlantForm.setControl('level', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](res.level, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));

              _this.editPlantModal.nativeElement.click();
            });
            this.editPlantForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              level: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
            });
          }
        }, {
          key: "edit",
          value: function edit() {
            this.submitted = true;

            if (this.editPlantForm.valid) {
              this.main.editPlant(this.editPlantForm.value);
            }
          }
        }]);

        return EditPlantModalComponent;
      }();

      EditPlantModalComponent.ctorParameters = function () {
        return [{
          type: _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__["ModalsService"]
        }, {
          type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_6__["MainService"]
        }];
      };

      EditPlantModalComponent.propDecorators = {
        editPlantModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['editPlantModal']
        }]
      };
      EditPlantModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-plant-modal',
        template: _raw_loader_edit_plant_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_plant_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditPlantModalComponent);
      /***/
    },

    /***/
    "22uC":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-page/main-page.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row p-0 m-0 justify-content-center\">\n  <app-navbar class=\"d-block d-md-none w-100\"></app-navbar>\n  <div class=\"col-3 text-div m-0 d-none d-md-block\">\n    <div class=\"logoDiv\">\n      <div class=\"imgDiv\">\n        <img src=\"assets/img/logo.png\" class=\"img-logo img-fluid w-75\" alt=\"logo\" />\n      </div>\n      <div class=\"row p-0 m-0 smallPanel\">\n        <i class=\"fas fa-user-circle\" style=\"margin-left: 100px; margin-top: 10px;\"></i>\n        <div class=\"ml-4\">\n          <div>  Witaj {{this.user.firstName}}</div>\n          <div style=\"font-size: 22px;\">Panel sterowania</div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"panelDiv mt-1\">\n      <div class=\"goBackBtn\" (click)=\"goBack()\">\n        <i class=\"fas fa-arrow-alt-circle-left mr-4\"></i>Wróć\n      </div>\n      <div class=\"add\" (click)=\"add()\">\n        <i class=\"fas fa-plus mr-4\"></i>Dodaj nowe\n      </div>\n      <div class=\"add\" (click)=\"logout()\">\n        <i class=\"fas fa-sign-out-alt mr-4\"></i>Wyloguj się\n      </div>\n    </div>\n\n\n  </div>\n  <div class=\"col-md-9 col-12 m-0 p-0\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n";
      /***/
    },

    /***/
    "3F0J":
    /*!**************************************************************!*\
      !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
      \**************************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function F0J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "pbNA");
      /* harmony import */


      var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./navbar.component.scss */
      "/Vpn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/modals/modals.service */
      "Sond");
      /* harmony import */


      var _core_main_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/main/main.service */
      "EFeq");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(modals, main) {
          _classCallCheck(this, NavbarComponent);

          this.modals = modals;
          this.main = main;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "loginOpen",
          value: function loginOpen() {
            this.modals.openLoginEmit();
          }
        }, {
          key: "registerOpen",
          value: function registerOpen() {
            this.modals.openRegisterEmit();
          }
        }, {
          key: "logout",
          value: function logout() {
            this.main.logout();
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ctorParameters = function () {
        return [{
          type: _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_4__["ModalsService"]
        }, {
          type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
        }];
      };

      NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NavbarComponent);
      /***/
    },

    /***/
    "3vxj":
    /*!********************************************************************************!*\
      !*** ./src/app/components/modals/register-modal/register-modal.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function vxj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".registerDiv {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbHMvcmVnaXN0ZXItbW9kYWwvcmVnaXN0ZXItbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbHMvcmVnaXN0ZXItbW9kYWwvcmVnaXN0ZXItbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXJEaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "3xZd":
    /*!************************************************************************************!*\
      !*** ./src/app/components/modals/edit-plant-modal/edit-plant-modal.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function xZd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2VkaXQtcGxhbnQtbW9kYWwvZWRpdC1wbGFudC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "4KGf":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/you-sure-modal/you-sure-modal.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KGf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button type=\"button\" class=\"btn btn-primary d-none\" data-toggle=\"modal\" data-target=\"#youSureModal\" #youSureModal data-backdrop=\"static\" data-keyboard=\"false\"></button>\n\n<div class=\"modal fade\" id=\"youSureModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body row p-3 m-0 justify-content-around\">\n        <h2 class=\"text-center col-12 mb-4\">Jesteś pewny?</h2>\n        <button class=\"btn btn-yes\" (click)=\"sureCheck(true)\" data-dismiss=\"modal\">Tak chcę to zrobić.</button>\n        <button class=\"btn btn-no\" (click)=\"sureCheck(false)\" data-dismiss=\"modal\">Pomyliłem się.</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "5m3x":
    /*!*******************************************************************!*\
      !*** ./src/app/components/single-plant/single-plant.component.ts ***!
      \*******************************************************************/

    /*! exports provided: SinglePlantComponent */

    /***/
    function m3x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SinglePlantComponent", function () {
        return SinglePlantComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_single_plant_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./single-plant.component.html */
      "P7An");
      /* harmony import */


      var _single_plant_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./single-plant.component.scss */
      "jA2m");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_main_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/main/main.service */
      "EFeq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! chart.js */
      "MO+k");
      /* harmony import */


      var chart_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var SinglePlantComponent = /*#__PURE__*/function () {
        function SinglePlantComponent(main, route) {
          _classCallCheck(this, SinglePlantComponent);

          this.main = main;
          this.route = route;
          this.measurementsChecked = false;
        }

        _createClass(SinglePlantComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            var singleId = this.route.snapshot.paramMap.get('singleId');
            var id = this.route.snapshot.paramMap.get('id');
            this.plant = this.main.getUser.devices[id].plants[singleId];
            this.main.getMeasurements(this.plant.id, 8).subscribe(function (res) {
              _this2.measurements = res;

              if (res[0]) {
                _this2.whatToShow('temperature');
              } else {
                _this2.measurementsChecked = true;
              }
            });
            this.chartForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
              amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
            });
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            this.canvas = document.getElementById('myChart');
            this.ctx = this.canvas.getContext('2d');
          }
        }, {
          key: "send",
          value: function send() {
            var _this3 = this;

            this.submitted = true;
            this.main.getMeasurements(this.plant.id, this.chartForm.controls.amount.value).subscribe(function (res) {
              _this3.measurements = res;

              if (res[0]) {
                _this3.whatToShow('temperature');
              } else {
                _this3.measurementsChecked = true;
              }
            });
          }
        }, {
          key: "whatToShow",
          value: function whatToShow(nameOfVariable) {
            this.currentlyShowing = nameOfVariable;

            if (this.myChart) {
              this.myChart.destroy();
            }

            var data = [];
            var labels = [];
            this.measurements.map(function (x) {
              data.push(x[nameOfVariable]);
              var date = new Date();
              labels.push(date.toLocaleTimeString());
            });
            var config = {
              type: 'line',
              data: {
                labels: labels,
                datasets: [{
                  label: nameOfVariable,
                  data: data,
                  backgroundColor: ['rgb(226,92,4, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                  borderWidth: 1
                }]
              },
              options: {
                legend: {
                  display: false
                },
                responsive: true,
                display: true
              }
            };
            this.myChart = new chart_js__WEBPACK_IMPORTED_MODULE_6__(this.ctx, config);
          }
        }]);

        return SinglePlantComponent;
      }();

      SinglePlantComponent.ctorParameters = function () {
        return [{
          type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      };

      SinglePlantComponent.propDecorators = {
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['chart']
        }]
      };
      SinglePlantComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-single-plant',
        template: _raw_loader_single_plant_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_single_plant_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SinglePlantComponent);
      /***/
    },

    /***/
    "8+9U":
    /*!***********************************************************!*\
      !*** ./src/app/components/welcome/welcome.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cover {\n  background-image: url('foresthd.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n  width: 100vw;\n}\n\n.buttonsDiv {\n  padding: 30px;\n  background: white;\n  border-radius: 15px;\n}\n\n.centeredDiv {\n  margin-top: 150px;\n}\n\n.btnLogin {\n  font-size: 22px;\n  border-radius: 15px;\n  border: 2px solid black;\n  transition: 0.4s all ease;\n}\n\n.btnReg {\n  font-size: 17px;\n}\n\n.btnLogin:hover {\n  background: #515151;\n  border: 2px solid #515151;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQU1GIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY292ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvZm9yZXN0aGQuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG4uYnV0dG9uc0RpdiB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5jZW50ZXJlZERpdiB7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbn1cclxuLmJ0bkxvZ2luIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICB0cmFuc2l0aW9uOiAwLjRzIGFsbCBlYXNlO1xyXG59XHJcbi5idG5SZWcge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4uYnRuTG9naW46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1MTUxNTE7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzUxNTE1MTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "8ZjD":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/register-modal/register-modal.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZjD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button type=\"button\" class=\"btn btn-primary d-none\" data-toggle=\"modal\" data-target=\"#registerModel\" #registerModalButton></button>\n\n<div class=\"modal fade\" id=\"registerModel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Zarejestruj się</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" data-dismiss=\"modal\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"registerForm\">\n          <div class=\"form-group\">\n            <label class=\"form-check-label d-none\" for=\"firstNameReg\">Wprowadź email</label>\n            <input type=\"email\" class=\"form-control\" id=\"firstNameReg\" aria-describedby=\"emailHelp\" placeholder=\"Imię\" formControlName=\"firstName\">\n            <div *ngIf=\"registerForm.controls.firstName.invalid && submitted\" class=\"alert alert-danger\">\n              Podaj poprawne imię.\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-check-label d-none\" for=\"lastNameReg\">Wprowadź email</label>\n            <input type=\"email\" class=\"form-control\" id=\"lastNameReg\" aria-describedby=\"emailHelp\" placeholder=\"Nazwisko\" formControlName=\"lastName\">\n            <div *ngIf=\"registerForm.controls.lastName.invalid && submitted\" class=\"alert alert-danger\">\n              Podaj poprawne nazwisko.\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-check-label d-none\" for=\"registerEmail\">Wprowadź email</label>\n            <input type=\"email\" class=\"form-control\" id=\"registerEmail\" aria-describedby=\"emailHelp\" placeholder=\"Email\" formControlName=\"email\">\n            <div *ngIf=\"registerForm.controls.email.invalid && submitted\" class=\"alert alert-danger\">\n              Podaj poprawny email.\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-check-label d-none\" for=\"registerPassword\">Wprowadź hasło</label>\n            <input type=\"password\" class=\"form-control\" id=\"registerPassword\" placeholder=\"Hasło\" formControlName=\"password\">\n            <div *ngIf=\"registerForm.controls.password.invalid && submitted\" class=\"alert alert-danger\">\n              Podaj poprawne hasło.\n            </div>\n          </div>\n          <div class=\"row p-0 m-0 justify-content-center\">\n            <button type=\"submit\" class=\"btn btn-login col-6\" (click)=\"register()\" data-dismiss=\"modal\">Zarejestruj się!</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiUrl: 'https://localhost:5001'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "DYss":
    /*!**************************************************************************!*\
      !*** ./src/app/components/modals/login-modal/login-modal.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function DYss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".registerDiv {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbHMvbG9naW4tbW9kYWwvbG9naW4tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbHMvbG9naW4tbW9kYWwvbG9naW4tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXJEaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "EFeq":
    /*!*******************************************!*\
      !*** ./src/app/core/main/main.service.ts ***!
      \*******************************************/

    /*! exports provided: MainService */

    /***/
    function EFeq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainService", function () {
        return MainService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/shared.service */
      "dJ8K");
      /* harmony import */


      var _modals_modals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../modals/modals.service */
      "Sond");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../interceptor/http-error.interceptor */
      "bP1+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var skip = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set(_interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_6__["InterceptorSkipHeader"], '');

      var MainService = /*#__PURE__*/function () {
        function MainService(http, shared, modals, toastr, router) {
          _classCallCheck(this, MainService);

          this.http = http;
          this.shared = shared;
          this.modals = modals;
          this.toastr = toastr;
          this.router = router;
          this.apiUrl = 'https://api-smart-plant.herokuapp.com/api/';
        }

        _createClass(MainService, [{
          key: "isUserLogged",
          value: function isUserLogged() {
            return !!this.user;
          }
        }, {
          key: "redirect",
          value: function redirect() {
            if (this.user) {
              this.router.navigateByUrl('logged');
            } else {
              this.router.navigateByUrl('');
            }
          } // User

        }, {
          key: "logout",
          value: function logout() {
            this.user = null;
            localStorage.removeItem('Token');
            this.redirect();
          }
        }, {
          key: "login",
          value: function login(userCred) {
            var _this4 = this;

            this.http.post(this.apiUrl + 'user/login', userCred).subscribe(function (res) {
              localStorage.setItem('Token', res.token);
              _this4.user = res;
              console.log(_this4.user);

              _this4.redirect();
            });
          }
        }, {
          key: "register",
          value: function register(userCred) {
            var _this5 = this;

            this.http.post(this.apiUrl + 'user/register', userCred).subscribe(function (res) {
              _this5.modals.openRegisterEmit();

              _this5.toastr.success('Pomyślnie zarejestorwano.', 'Udało się!');

              _this5.user = res;
              console.log(_this5.user);

              _this5.redirect();
            });
          }
        }, {
          key: "loginViaToken",
          value: function loginViaToken() {
            var _this6 = this;

            this.shared.loading = true;
            this.http.get(this.apiUrl + 'user/loginViaToken', {
              headers: skip
            }).subscribe(function (res) {
              _this6.user = res;

              _this6.redirect();

              _this6.shared.loading = false;
            });
          } //  Device

        }, {
          key: "addDevice",
          value: function addDevice(device) {
            var _this7 = this;

            this.http.post(this.apiUrl + 'device', device).subscribe(function (res) {
              _this7.toastr.success('Pomyślnie dodano nowe urządzenie.', 'Udało się!');

              _this7.user.devices.push(res);
            });
          }
        }, {
          key: "editDevice",
          value: function editDevice(_editDevice) {
            var _this8 = this;

            this.http.put(this.apiUrl + 'device/' + _editDevice.id, {
              name: _editDevice.name
            }).subscribe(function (res) {
              _this8.toastr.success('Pomyślnie edytowano.', 'Udało się!');

              var i = _this8.user.devices.findIndex(function (x) {
                return x.id === res.id;
              });

              _this8.user.devices[i].name = res.name;
            });
          }
        }, {
          key: "deleteDevice",
          value: function deleteDevice(id, index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this9 = this;

              var sure;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.checkIfSure();

                    case 2:
                      sure = _context.sent;

                      if (sure) {
                        this.http["delete"](this.apiUrl + 'device/' + id).subscribe(function () {
                          _this9.toastr.success('Pomyślnie usunięto urządzenie.', 'Udało się!');

                          _this9.user.devices.splice(index, 1);
                        });
                      }

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "checkIfSure",
          value: function checkIfSure() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this10 = this;

              var conf;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.modals.openYouSureEmit();
                      conf = new Promise(function (resolve) {
                        _this10.sureSubscription = _this10.modals.sureConfirmation.subscribe(function (x) {
                          _this10.sureSubscription.unsubscribe();

                          resolve(x);
                        });
                      });
                      _context2.next = 4;
                      return conf;

                    case 4:
                      return _context2.abrupt("return", _context2.sent);

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } //  Plant

        }, {
          key: "addPlant",
          value: function addPlant(plant) {
            var _this11 = this;

            this.http.post(this.apiUrl + 'plant', plant).subscribe(function (res) {
              _this11.toastr.success('Pomyślnie dodano nowe urządzenie.', 'Udało się!');

              var i = _this11.user.devices.findIndex(function (x) {
                return x.id === res.deviceId;
              });

              _this11.user.devices[i].plants.push(res);
            });
          }
        }, {
          key: "deletePlant",
          value: function deletePlant(id, index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this12 = this;

              var sure;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.checkIfSure();

                    case 2:
                      sure = _context3.sent;

                      if (sure) {
                        this.http["delete"](this.apiUrl + 'plant/' + id).subscribe(function (res) {
                          _this12.toastr.success('Pomyślnie usunięto roślinę.', 'Udało się!');

                          var i = _this12.user.devices.map(function (e) {
                            return e.id;
                          }).indexOf(res.deviceId);

                          _this12.user.devices[i].plants.splice(index, 1);
                        });
                      }

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "editPlant",
          value: function editPlant(_editPlant) {
            var _this13 = this;

            this.http.put(this.apiUrl + 'plant/' + _editPlant.id, _editPlant).subscribe(function (res) {
              _this13.toastr.success('Pomyślnie edytowano.', 'Udało się!');

              var iDev = _this13.user.devices.map(function (e) {
                return e.id;
              }).indexOf(res.deviceId);

              var iPlan = _this13.user.devices[iDev].plants.map(function (e) {
                return e.id;
              }).indexOf(res.id);

              _this13.user.devices[iDev].plants[iPlan] = res;
            });
          } // Measurements

        }, {
          key: "getMeasurements",
          value: function getMeasurements(id, amount) {
            return this.http.get(this.apiUrl + 'measurements/' + id + '/' + amount);
          }
        }, {
          key: "getUser",
          get: function get() {
            return this.user;
          }
        }]);

        return MainService;
      }();

      MainService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: _modals_modals_service__WEBPACK_IMPORTED_MODULE_4__["ModalsService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      MainService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MainService);
      /***/
    },

    /***/
    "Ff+L":
    /*!********************************************************************************!*\
      !*** ./src/app/components/shared/page-not-found/page-not-found.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function FfL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "HlbY":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/devices/devices.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HlbY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"col-12 text-desc\">Twoje urządzenia</div>\n<div class=\"elementsDiv\" *ngIf=\"devices?.length\">\n      <div *ngFor=\"let device of devices; let i = index\" class=\"singleElement row p-0 m-0\" >\n        <div class=\"col-10 elementDesc\" (click)=\"nextStep(i)\">\n          {{device.name}} <span class=\"idElement\">id: {{device.id}}</span>\n        </div>\n        <div (click)=\"delete(i)\" class=\"col-1 del-btn text-center\"><i class=\"fas fa-trash del-icon\"></i></div>\n        <div (click)=\"edit(i)\" class=\"col-1 settings-btn text-center\"><i class=\"fas fa-cog edit-icon\"></i></div>\n      </div>\n</div>\n<div class=\"noDataDiv\" *ngIf=\"!devices?.length\">\n  <div class=\"noDataText\"><i class=\"fas fa-exclamation-triangle\"></i> Niestety nie masz jeszcze żadnych urządzeń.</div>\n</div>\n\n\n";
      /***/
    },

    /***/
    "IGe9":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/welcome/welcome.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function IGe9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"cover row p-0 m-0 justify-content-center\">\n  <div class=\"centeredDiv\">\n    <h1 class=\"text-center display-4\">SmartPlant</h1>\n    <div class=\"buttonsDiv\">\n      <button class=\"btn btnLogin col\" (click)=\"loginOpen()\">Zaloguj się</button>\n      <button class=\"btn col btnReg\" (click)=\"registerOpen()\">Nie masz jeszcze konta? Zarejestruj się!</button>\n    </div>\n  </div>\n</div>\n\n";
      /***/
    },

    /***/
    "JcAc":
    /*!*********************************************************!*\
      !*** ./src/app/components/welcome/welcome.component.ts ***!
      \*********************************************************/

    /*! exports provided: WelcomeComponent */

    /***/
    function JcAc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
        return WelcomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_welcome_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./welcome.component.html */
      "IGe9");
      /* harmony import */


      var _welcome_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./welcome.component.scss */
      "8+9U");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/modals/modals.service */
      "Sond");
      /* harmony import */


      var _core_main_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/main/main.service */
      "EFeq");

      var WelcomeComponent = /*#__PURE__*/function () {
        function WelcomeComponent(modals, main) {
          _classCallCheck(this, WelcomeComponent);

          this.modals = modals;
          this.main = main;
        }

        _createClass(WelcomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "loginOpen",
          value: function loginOpen() {
            this.modals.openLoginEmit();
          }
        }, {
          key: "registerOpen",
          value: function registerOpen() {
            this.modals.openRegisterEmit();
          }
        }, {
          key: "logout",
          value: function logout() {
            this.main.logout();
          }
        }]);

        return WelcomeComponent;
      }();

      WelcomeComponent.ctorParameters = function () {
        return [{
          type: _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_4__["ModalsService"]
        }, {
          type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
        }];
      };

      WelcomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-welcome',
        template: _raw_loader_welcome_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_welcome_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], WelcomeComponent);
      /***/
    },

    /***/
    "MCtv":
    /*!*********************************************************!*\
      !*** ./src/app/components/devices/devices.component.ts ***!
      \*********************************************************/

    /*! exports provided: DevicesComponent */

    /***/
    function MCtv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DevicesComponent", function () {
        return DevicesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_devices_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./devices.component.html */
      "HlbY");
      /* harmony import */


      var _devices_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./devices.component.scss */
      "PcDG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_main_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/main/main.service */
      "EFeq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/modals/modals.service */
      "Sond");

      var DevicesComponent = /*#__PURE__*/function () {
        function DevicesComponent(main, router, modals) {
          _classCallCheck(this, DevicesComponent);

          this.main = main;
          this.router = router;
          this.modals = modals;
        }

        _createClass(DevicesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.devices = this.main.getUser.devices;
            console.log(!this.devices[0]);
          }
        }, {
          key: "nextStep",
          value: function nextStep(i) {
            this.router.navigateByUrl("logged/plants/".concat(i));
          }
        }, {
          key: "delete",
          value: function _delete(i) {
            var deviceId = this.devices[i].id;
            this.main.deleteDevice(deviceId, i);
          }
        }, {
          key: "edit",
          value: function edit(i) {
            var deviceId = this.devices[i].id;
            this.modals.openEditDeviceEmit(deviceId);
          }
        }]);

        return DevicesComponent;
      }();

      DevicesComponent.ctorParameters = function () {
        return [{
          type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_6__["ModalsService"]
        }];
      };

      DevicesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-devices',
        template: _raw_loader_devices_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_devices_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DevicesComponent);
      /***/
    },

    /***/
    "N4eq":
    /*!******************************************************************************!*\
      !*** ./src/app/components/shared/page-not-found/page-not-found.component.ts ***!
      \******************************************************************************/

    /*! exports provided: PageNotFoundComponent */

    /***/
    function N4eq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
        return PageNotFoundComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_page_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "YqO2");
      /* harmony import */


      var _page_not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page-not-found.component.scss */
      "Ff+L");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PageNotFoundComponent = /*#__PURE__*/function () {
        function PageNotFoundComponent() {
          _classCallCheck(this, PageNotFoundComponent);
        }

        _createClass(PageNotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageNotFoundComponent;
      }();

      PageNotFoundComponent.ctorParameters = function () {
        return [];
      };

      PageNotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-page-not-found',
        template: _raw_loader_page_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_page_not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PageNotFoundComponent);
      /***/
    },

    /***/
    "NUQi":
    /*!*******************************************!*\
      !*** ./src/app/core/guards/auth.guard.ts ***!
      \*******************************************/

    /*! exports provided: AuthGuard */

    /***/
    function NUQi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _main_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../main/main.service */
      "EFeq");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(main, router) {
          _classCallCheck(this, AuthGuard);

          this.main = main;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return this.main.isUserLogged();
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _main_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      /***/
    },

    /***/
    "OXPm":
    /*!********************************************************************************!*\
      !*** ./src/app/components/modals/add-plant-modal/add-plant-modal.component.ts ***!
      \********************************************************************************/

    /*! exports provided: AddPlantModalComponent */

    /***/
    function OXPm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddPlantModalComponent", function () {
        return AddPlantModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_plant_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-plant-modal.component.html */
      "+OAD");
      /* harmony import */


      var _add_plant_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-plant-modal.component.scss */
      "tYur");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/modals/modals.service */
      "Sond");
      /* harmony import */


      var _core_main_main_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/main/main.service */
      "EFeq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AddPlantModalComponent = /*#__PURE__*/function () {
        function AddPlantModalComponent(modals, main, router) {
          _classCallCheck(this, AddPlantModalComponent);

          this.modals = modals;
          this.main = main;
          this.router = router;
          this.submitted = false;
        }

        _createClass(AddPlantModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.modals.openAddPlant.subscribe(function () {
              _this14.addPlantModal.nativeElement.click();

              var deviceUrl = _this14.router.url.split('/');

              var index = deviceUrl[deviceUrl.length - 1];
              var deviceId = _this14.main.getUser.devices[index].id;

              _this14.addPlantForm.setControl('deviceId', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](deviceId));
            });
            var url = this.router.url.split('/');
            console.log(url);
            this.addPlantForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('Roślinka', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              level: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              deviceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
            });
          }
        }, {
          key: "add",
          value: function add() {
            this.submitted = true;

            if (this.addPlantForm.valid) {
              this.main.addPlant(this.addPlantForm.value);
            }
          }
        }]);

        return AddPlantModalComponent;
      }();

      AddPlantModalComponent.ctorParameters = function () {
        return [{
          type: _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__["ModalsService"]
        }, {
          type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_6__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      AddPlantModalComponent.propDecorators = {
        addPlantModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['addPlantModal']
        }]
      };
      AddPlantModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-plant-modal',
        template: _raw_loader_add_plant_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_plant_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddPlantModalComponent);
      /***/
    },

    /***/
    "P7An":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/single-plant/single-plant.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function P7An(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"col-12 text-desc\">Twoja roślina</div>\n<div class=\"chartDiv row m-2\" [ngClass]=\"{'noBorder': !this.measurements?.length}\">\n  <div class=\"chartButtons col-4 flex-column row p-0 m-0\">\n    <div class=\"elementDesc mb-2 pr-2\">\n      {{plant.name}}\n      <span style=\"float:right;\">\n        Poziom: {{plant.level}}\n      </span>\n    </div>\n    <div *ngIf=\"this.measurements?.length\">\n      <div class=\"measQues pr-2\">\n        <div class=\"daneDiv mb-2\">Ile pomiarów wczytać?</div>\n        <form [formGroup]=\"chartForm\" class=\"row p-0 m-0\">\n          <div class=\"form-group m-0 p-0 col-10\">\n            <label class=\"form-check-label d-none\" for=\"chartAmount\">Wprowadź liczbę</label>\n            <input type=\"text\" class=\"form-control\" id=\"chartAmount\" placeholder=\"Ilość pomiarów\" formControlName=\"amount\">\n\n          </div>\n          <button (click)=\"send()\" class=\"col-2 btn btnMoreMeas\">\n            <i class=\"fas fa-check align-self-center\" style=\"font-size: 25px;\"></i>\n          </button>\n        </form>\n      </div>\n\n      <div class=\"row p-0 m-0 lastMeasDiv pr-2\">\n        <div class=\"daneDiv col-12 m-0 p-0\">Ostatni pomiar</div>\n        <div class=\"lastMeas col-5\">\n          Temperatura: {{this.measurements[0].temperature}}\n        </div>\n        <div class=\"lastMeas col-5\">\n          Wilgotność: {{this.measurements[0].humidity}}\n        </div>\n        <div class=\"lastMeas col-5\">\n          Waga: {{this.measurements[0].weight}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"noDataDiv col-12 m-0 p-0\" *ngIf=\"!this.measurements?.length\">\n    <div *ngIf=\"measurementsChecked\">\n      <div class=\"noDataText m-0\"><i class=\"fas fa-exclamation-triangle\"></i> To urządzenie nie ma jeszcze żadnych pomiarów.</div>\n    </div>\n  </div>\n  <div class=\"singleChart col-8\">\n    <div *ngIf=\"this.measurements?.length\" class=\"row m-0 p-0 justify-content-around\">\n      <button (click)=\"whatToShow('temperature')\" class=\"btn btnMeas\" [ngClass]=\"{'activeBtn': currentlyShowing === 'temperature'}\">\n        Temperatura\n      </button>\n      <button (click)=\"whatToShow('humidity')\" class=\"btn btnMeas\" [ngClass]=\"{'activeBtn': currentlyShowing === 'humidity'}\">\n        Wilgotność\n      </button>\n      <button (click)=\"whatToShow('weight')\" class=\"btn btnMeas\" [ngClass]=\"{'activeBtn': currentlyShowing === 'weight'}\">\n        Waga\n      </button>\n    </div>\n    <canvas id=\"myChart\" #chart></canvas>\n  </div>\n</div>\n\n\n\n";
      /***/
    },

    /***/
    "PMCZ":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/plants/plants.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function PMCZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"col-12 text-desc\">Rośliny</div>\n<div class=\"elementsDiv\" *ngIf=\"plants?.length\">\n  <div *ngFor=\"let plant of plants; let i = index\" class=\"singleElement row p-0\" >\n    <div class=\"col-10 elementDesc\" (click)=\"nextStep(i)\">\n      {{plant.name}} <span class=\"idElement\">id: {{plant.id}}</span> <span style=\"text-align: right\"> Poziom: {{plant.level}}</span>\n    </div>\n    <div (click)=\"delete(i)\" class=\"col-1 del-btn text-center\"><i class=\"fas fa-trash del-icon\"></i></div>\n    <div (click)=\"edit(i)\" class=\"col-1 settings-btn text-center\"><i class=\"fas fa-cog edit-icon\"></i></div>\n  </div>\n</div>\n<div class=\"noDataDiv\" *ngIf=\"!plants?.length\">\n  <div class=\"noDataText\"><i class=\"fas fa-exclamation-triangle\"></i> Niestety nie masz jeszcze żadnych roślin.</div>\n</div>\n\n\n\n\n\n";
      /***/
    },

    /***/
    "PcDG":
    /*!***********************************************************!*\
      !*** ./src/app/components/devices/devices.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function PcDG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV2aWNlcy9kZXZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "PjwP":
    /*!************************************************************************************!*\
      !*** ./src/app/components/modals/add-device-modal/add-device-modal.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function PjwP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2FkZC1kZXZpY2UtbW9kYWwvYWRkLWRldmljZS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "RhSj":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/spinner/spinner.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RhSj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"main\">\n\n  <span class=\"spinner\"></span>\n\n</div>\n\n";
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "S9dX":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/login-modal/login-modal.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function S9dX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button type=\"button\" class=\"btn btn-primary d-none\" data-toggle=\"modal\" data-target=\"#loginModal\" #loginModalButton></button>\r\n\r\n<div class=\"modal fade\" id=\"loginModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Zaloguj się</h5>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" data-dismiss=\"modal\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"loginForm\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-check-label d-none\" for=\"loginEmail\">Wprowadź email</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"loginEmail\" aria-describedby=\"emailHelp\" placeholder=\"Podaj email\" formControlName=\"email\">\r\n            <div *ngIf=\"loginForm.controls.email.invalid && submitted\" class=\"alert alert-danger\">\r\n              Podaj poprawny email.\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"form-check-label d-none\" for=\"loginPassword\">Wprowadź hasło</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"loginPassword\" placeholder=\"Hasło\" formControlName=\"password\">\r\n            <div *ngIf=\"loginForm.controls.password.invalid && submitted\" class=\"alert alert-danger\">\r\n              Podaj poprawne hasło.\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-0 m-0 justify-content-center\">\r\n            <button type=\"submit\" class=\"btn btn-login col-6\" (click)=\"login()\" data-dismiss=\"modal\">Zaloguj się!</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "SUkG":
    /*!***************************************************!*\
      !*** ./src/app/core/guards/welcome-auth.guard.ts ***!
      \***************************************************/

    /*! exports provided: WelcomeAuthGuard */

    /***/
    function SUkG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeAuthGuard", function () {
        return WelcomeAuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _main_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../main/main.service */
      "EFeq");

      var WelcomeAuthGuard = /*#__PURE__*/function () {
        function WelcomeAuthGuard(main) {
          _classCallCheck(this, WelcomeAuthGuard);

          this.main = main;
        }

        _createClass(WelcomeAuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return !this.main.isUserLogged();
          }
        }]);

        return WelcomeAuthGuard;
      }();

      WelcomeAuthGuard.ctorParameters = function () {
        return [{
          type: _main_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
        }];
      };

      WelcomeAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], WelcomeAuthGuard);
      /***/
    },

    /***/
    "Sond":
    /*!***********************************************!*\
      !*** ./src/app/core/modals/modals.service.ts ***!
      \***********************************************/

    /*! exports provided: ModalsService */

    /***/
    function Sond(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalsService", function () {
        return ModalsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ModalsService = /*#__PURE__*/function () {
        function ModalsService() {
          _classCallCheck(this, ModalsService);

          this.openLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.openRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.openAddDevice = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.openAddPlant = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.openYouSure = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.openEditDevice = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.openEditPlant = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.sureConfirmation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(ModalsService, [{
          key: "sureConfirmationEmit",
          value: function sureConfirmationEmit(x) {
            this.sureConfirmation.emit(x);
          }
        }, {
          key: "openLoginEmit",
          value: function openLoginEmit() {
            this.openLogin.emit('');
          }
        }, {
          key: "openAddDeviceEmit",
          value: function openAddDeviceEmit() {
            this.openAddDevice.emit('');
          }
        }, {
          key: "openAddPlantEmit",
          value: function openAddPlantEmit() {
            this.openAddPlant.emit('');
          }
        }, {
          key: "openYouSureEmit",
          value: function openYouSureEmit() {
            this.openYouSure.emit('');
          }
        }, {
          key: "openEditDeviceEmit",
          value: function openEditDeviceEmit(id) {
            this.openEditDevice.emit(id);
          }
        }, {
          key: "openEditPlantEmit",
          value: function openEditPlantEmit(id, level) {
            this.openEditPlant.emit({
              id: id,
              level: level
            });
          }
        }, {
          key: "openRegisterEmit",
          value: function openRegisterEmit() {
            this.openRegister.emit('');
          }
        }]);

        return ModalsService;
      }();

      ModalsService.ctorParameters = function () {
        return [];
      };

      ModalsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ModalsService);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_main_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./core/main/main.service */
      "EFeq");
      /* harmony import */


      var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./core/shared/shared.service */
      "dJ8K");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(main, shared, changeDetector) {
          _classCallCheck(this, AppComponent);

          this.main = main;
          this.shared = shared;
          this.changeDetector = changeDetector;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var token = localStorage.getItem('Token');

            if (token) {
              this.main.loginViaToken();
            } else {
              this.shared.loading = false;
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            this.changeDetector.detectChanges();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
        }, {
          type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-spinner *ngIf=\"this.shared.loading\"></app-spinner>\r\n<div class=\"p-0 m-0\" *ngIf=\"!this.shared.loading\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n<app-login-modal></app-login-modal>\r\n<app-register-modal></app-register-modal>\r\n<app-add-device-modal></app-add-device-modal>\r\n<app-add-plant-modal></app-add-plant-modal>\r\n<app-edit-data-modal></app-edit-data-modal>\r\n<app-edit-plant-modal></app-edit-plant-modal>\r\n<app-you-sure-modal></app-you-sure-modal>\r\n";
      /***/
    },

    /***/
    "YqO2":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/page-not-found/page-not-found.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YqO2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>page-not-found works!</p>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_modals_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/modals/login-modal/login-modal.component */
      "wT1i");
      /* harmony import */


      var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/shared/navbar/navbar.component */
      "3F0J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _core_interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./core/interceptor/http-error.interceptor */
      "bP1+");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _core_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./core/auth/auth.interceptor */
      "+DiT");
      /* harmony import */


      var _components_modals_register_modal_register_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/modals/register-modal/register-modal.component */
      "uK6u");
      /* harmony import */


      var _components_shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/shared/spinner/spinner.component */
      "q98u");
      /* harmony import */


      var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./core/shared/shared.service */
      "dJ8K");
      /* harmony import */


      var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/welcome/welcome.component */
      "JcAc");
      /* harmony import */


      var _components_plants_plants_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/plants/plants.component */
      "yHqG");
      /* harmony import */


      var _components_devices_devices_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/devices/devices.component */
      "MCtv");
      /* harmony import */


      var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/main-page/main-page.component */
      "oaKM");
      /* harmony import */


      var _components_shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/shared/page-not-found/page-not-found.component */
      "N4eq");
      /* harmony import */


      var _components_single_plant_single_plant_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/single-plant/single-plant.component */
      "5m3x");
      /* harmony import */


      var _components_modals_edit_data_modal_edit_data_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/modals/edit-data-modal/edit-data-modal.component */
      "gVo3");
      /* harmony import */


      var _components_modals_you_sure_modal_you_sure_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/modals/you-sure-modal/you-sure-modal.component */
      "yqK8");
      /* harmony import */


      var _components_modals_add_device_modal_add_device_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/modals/add-device-modal/add-device-modal.component */
      "gYGl");
      /* harmony import */


      var _components_modals_add_plant_modal_add_plant_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./components/modals/add-plant-modal/add-plant-modal.component */
      "OXPm");
      /* harmony import */


      var _components_modals_edit_plant_modal_edit_plant_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./components/modals/edit-plant-modal/edit-plant-modal.component */
      "1rRq");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_modals_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_5__["LoginModalComponent"], _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _components_modals_register_modal_register_modal_component__WEBPACK_IMPORTED_MODULE_13__["RegisterModalComponent"], _components_shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_14__["SpinnerComponent"], _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_16__["WelcomeComponent"], _components_plants_plants_component__WEBPACK_IMPORTED_MODULE_17__["PlantsComponent"], _components_devices_devices_component__WEBPACK_IMPORTED_MODULE_18__["DevicesComponent"], _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_19__["MainPageComponent"], _components_shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"], _components_single_plant_single_plant_component__WEBPACK_IMPORTED_MODULE_21__["SinglePlantComponent"], _components_modals_edit_data_modal_edit_data_modal_component__WEBPACK_IMPORTED_MODULE_22__["EditDataModalComponent"], _components_modals_you_sure_modal_you_sure_modal_component__WEBPACK_IMPORTED_MODULE_23__["YouSureModalComponent"], _components_modals_add_device_modal_add_device_modal_component__WEBPACK_IMPORTED_MODULE_24__["AddDeviceModalComponent"], _components_modals_add_plant_modal_add_plant_modal_component__WEBPACK_IMPORTED_MODULE_25__["AddPlantModalComponent"], _components_modals_edit_plant_modal_edit_plant_modal_component__WEBPACK_IMPORTED_MODULE_26__["EditPlantModalComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({
          timeOut: 3000,
          positionClass: 'toast-top-right',
          preventDuplicates: true
        }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]],
        providers: [_core_shared_shared_service__WEBPACK_IMPORTED_MODULE_15__["SharedService"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
          useClass: _core_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
          useClass: _core_interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_8__["HttpErrorInterceptor"],
          multi: true,
          deps: [ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"], _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_15__["SharedService"]]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "bP1+":
    /*!************************************************************!*\
      !*** ./src/app/core/interceptor/http-error.interceptor.ts ***!
      \************************************************************/

    /*! exports provided: InterceptorSkipHeader, HttpErrorInterceptor */

    /***/
    function bP1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InterceptorSkipHeader", function () {
        return InterceptorSkipHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function () {
        return HttpErrorInterceptor;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var InterceptorSkipHeader = 'X-Skip-Interceptor';

      var HttpErrorInterceptor = /*#__PURE__*/function () {
        function HttpErrorInterceptor(toastr, shared) {
          _classCallCheck(this, HttpErrorInterceptor);

          this.toastr = toastr;
          this.shared = shared;
        }

        _createClass(HttpErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this15 = this;

            if (request.headers.has(InterceptorSkipHeader)) {
              var headers = request.headers["delete"](InterceptorSkipHeader);
              return next.handle(request.clone({
                headers: headers
              }));
            }

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              _this15.shared.loading = false;
              var errorMessage = '';

              if (error.error) {
                errorMessage = error.error;

                _this15.toastr.error(errorMessage, 'Wystąpił błąd.');
              } else {
                errorMessage = "Wiadomo\u015B\u0107: ".concat(error.message);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
            }));
          }
        }]);

        return HttpErrorInterceptor;
      }();
      /***/

    },

    /***/
    "dJ8K":
    /*!***********************************************!*\
      !*** ./src/app/core/shared/shared.service.ts ***!
      \***********************************************/

    /*! exports provided: SharedService */

    /***/
    function dJ8K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedService", function () {
        return SharedService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SharedService = function SharedService() {
        _classCallCheck(this, SharedService);

        this.loading = true;
      };

      SharedService.ctorParameters = function () {
        return [];
      };

      SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SharedService);
      /***/
    },

    /***/
    "ejPR":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/edit-data-modal/edit-data-modal.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ejPR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button type=\"button\" class=\"btn btn-primary d-none\" data-toggle=\"modal\" data-target=\"#editDeviceModal\" #editDeviceModal></button>\n\n<div class=\"modal fade\" id=\"editDeviceModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edytuj urządzenie</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" data-dismiss=\"modal\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"editDeviceForm\">\n          <div class=\"form-group\">\n            <label class=\"form-check-label d-none\" for=\"editDeviceName\">Wprowadź nazwę</label>\n            <input type=\"text\" class=\"form-control\" id=\"editDeviceName\" aria-describedby=\"emailHelp\" placeholder=\"Nowa nazwa\" formControlName=\"name\">\n            <div *ngIf=\"editDeviceForm.controls.name.invalid && submitted\" class=\"alert alert-danger\">\n              Podaj poprawną nazwę.\n            </div>\n          </div>\n          <div class=\"row p-0 m-0 justify-content-center\">\n            <button type=\"submit\" class=\"btn btn-add col-6\" (click)=\"edit()\" data-dismiss=\"modal\">Edytuj!</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "gVo3":
    /*!********************************************************************************!*\
      !*** ./src/app/components/modals/edit-data-modal/edit-data-modal.component.ts ***!
      \********************************************************************************/

    /*! exports provided: EditDataModalComponent */

    /***/
    function gVo3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditDataModalComponent", function () {
        return EditDataModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_data_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-data-modal.component.html */
      "ejPR");
      /* harmony import */


      var _edit_data_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-data-modal.component.scss */
      "v/yc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/modals/modals.service */
      "Sond");
      /* harmony import */


      var _core_main_main_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/main/main.service */
      "EFeq");

      var EditDataModalComponent = /*#__PURE__*/function () {
        function EditDataModalComponent(modals, main) {
          _classCallCheck(this, EditDataModalComponent);

          this.modals = modals;
          this.main = main;
          this.submitted = false;
        }

        _createClass(EditDataModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.modals.openEditDevice.subscribe(function (id) {
              _this16.editDeviceForm.addControl('id', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));

              _this16.editDeviceModal.nativeElement.click();
            });
            this.editDeviceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
            });
          }
        }, {
          key: "edit",
          value: function edit() {
            this.submitted = true;

            if (this.editDeviceForm.valid) {
              this.main.editDevice(this.editDeviceForm.value);
            }
          }
        }]);

        return EditDataModalComponent;
      }();

      EditDataModalComponent.ctorParameters = function () {
        return [{
          type: _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__["ModalsService"]
        }, {
          type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_6__["MainService"]
        }];
      };

      EditDataModalComponent.propDecorators = {
        editDeviceModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['editDeviceModal']
        }]
      };
      EditDataModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-data-modal',
        template: _raw_loader_edit_data_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_data_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditDataModalComponent);
      /***/
    },

    /***/
    "gYGl":
    /*!**********************************************************************************!*\
      !*** ./src/app/components/modals/add-device-modal/add-device-modal.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: AddDeviceModalComponent */

    /***/
    function gYGl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddDeviceModalComponent", function () {
        return AddDeviceModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_device_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-device-modal.component.html */
      "yItn");
      /* harmony import */


      var _add_device_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-device-modal.component.scss */
      "PjwP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/modals/modals.service */
      "Sond");
      /* harmony import */


      var _core_main_main_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/main/main.service */
      "EFeq");

      var AddDeviceModalComponent = /*#__PURE__*/function () {
        function AddDeviceModalComponent(modals, main) {
          _classCallCheck(this, AddDeviceModalComponent);

          this.modals = modals;
          this.main = main;
          this.submitted = false;
        }

        _createClass(AddDeviceModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.modals.openAddDevice.subscribe(function () {
              _this17.addDeviceModal.nativeElement.click();
            });
            this.addDeviceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('123', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              secretKey: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('123', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
            });
          }
        }, {
          key: "add",
          value: function add() {
            this.submitted = true;

            if (this.addDeviceForm.valid) {
              this.main.addDevice(this.addDeviceForm.value);
            }
          }
        }]);

        return AddDeviceModalComponent;
      }();

      AddDeviceModalComponent.ctorParameters = function () {
        return [{
          type: _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__["ModalsService"]
        }, {
          type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_6__["MainService"]
        }];
      };

      AddDeviceModalComponent.propDecorators = {
        addDeviceModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['addDeviceModal']
        }]
      };
      AddDeviceModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-device-modal',
        template: _raw_loader_add_device_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_device_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddDeviceModalComponent);
      /***/
    },

    /***/
    "iEAF":
    /*!******************************************************************!*\
      !*** ./src/app/components/shared/spinner/spinner.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function iEAF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#main {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.spinner {\n  position: relative;\n}\n\n.spinner:before, .spinner:after {\n  content: \"\";\n  position: relative;\n  display: block;\n}\n\n.spinner:before {\n  -webkit-animation: spinner 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;\n          animation: spinner 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;\n  width: 6em;\n  height: 6em;\n  background-color: #F8961E;\n}\n\n.spinner:after {\n  margin-top: 1em;\n  -webkit-animation: shadow 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;\n          animation: shadow 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;\n  bottom: -0.5em;\n  height: 0.25em;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n@-webkit-keyframes spinner {\n  50% {\n    border-radius: 50%;\n    transform: scale(0.5) rotate(360deg);\n  }\n  100% {\n    transform: scale(1) rotate(720deg);\n  }\n}\n\n@keyframes spinner {\n  50% {\n    border-radius: 50%;\n    transform: scale(0.5) rotate(360deg);\n  }\n  100% {\n    transform: scale(1) rotate(720deg);\n  }\n}\n\n@-webkit-keyframes shadow {\n  50% {\n    transform: scale(0.5);\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n}\n\n@keyframes shadow {\n  50% {\n    transform: scale(0.5);\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUFBO0VBQ0UsNkVBQUE7VUFBQSxxRUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSw0RUFBQTtVQUFBLG9FQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FBSUY7O0FBREE7RUFDRTtJQUNFLGtCQUFBO0lBQ0Esb0NBQUE7RUFJRjtFQUZBO0lBQ0Usa0NBQUE7RUFJRjtBQUNGOztBQVhBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLG9DQUFBO0VBSUY7RUFGQTtJQUNFLGtDQUFBO0VBSUY7QUFDRjs7QUFGQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxvQ0FBQTtFQUlGO0FBQ0Y7O0FBUkE7RUFDRTtJQUNFLHFCQUFBO0lBQ0Esb0NBQUE7RUFJRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnNwaW5uZXI6YmVmb3JlLCAuc3Bpbm5lcjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnNwaW5uZXI6YmVmb3JlIHtcclxuICBhbmltYXRpb246IHNwaW5uZXIgMi41cyBjdWJpYy1iZXppZXIoMC43NSwgMCwgMC41LCAxKSBpbmZpbml0ZSBub3JtYWw7XHJcbiAgd2lkdGg6IDZlbTtcclxuICBoZWlnaHQ6IDZlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjg5NjFFO1xyXG59XHJcbi5zcGlubmVyOmFmdGVyIHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgYW5pbWF0aW9uOiBzaGFkb3cgMi41cyBjdWJpYy1iZXppZXIoMC43NSwgMCwgMC41LCAxKSBpbmZpbml0ZSBub3JtYWw7XHJcbiAgYm90dG9tOiAtLjVlbTtcclxuICBoZWlnaHQ6IC4yNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsMC4yKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGlubmVyIHtcclxuICA1MCUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDcyMGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2hhZG93IHtcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLDAuMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "jA2m":
    /*!*********************************************************************!*\
      !*** ./src/app/components/single-plant/single-plant.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function jA2m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".chartDiv {\n  border: 3px solid #577590;\n  padding: 10px;\n  border-radius: 15px;\n}\n\n.noBorder {\n  border: none !important;\n}\n\n.elementDesc {\n  border-bottom: 1px solid black;\n}\n\n.daneDiv {\n  font-size: 22px;\n}\n\n.activeBtn {\n  transform: scale(1.1);\n  background: #7EB356 !important;\n}\n\n.lastMeas {\n  border-radius: 15px;\n  padding: 7px;\n  font-size: 20px;\n  text-align: center;\n  background: #577590;\n  margin: 10px;\n}\n\n.btnMeas {\n  transition: all ease 0.3s;\n  color: white;\n  background: #577590;\n}\n\n.lastMeasDiv {\n  position: absolute;\n  bottom: 0;\n  border-top: 1px solid black;\n}\n\n.btnMoreMeas {\n  background: #7EB356 !important;\n  transition: all ease 0.3s;\n}\n\n.btnMoreMeas:hover {\n  background: #72ca33 !important;\n}\n\n.chartButtons {\n  border-right: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaW5nbGUtcGxhbnQvc2luZ2xlLXBsYW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLHVCQUFBO0FBRUY7O0FBQUE7RUFDRSw4QkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtBQUlGOztBQUZBO0VBQ0UscUJBQUE7RUFDQSw4QkFBQTtBQUtGOztBQUhBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSkE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQU9GOztBQUxBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFRRjs7QUFOQTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7QUFTRjs7QUFQQTtFQUNFLDhCQUFBO0FBVUY7O0FBTEE7RUFDRSw2QkFBQTtBQVFGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaW5nbGUtcGxhbnQvc2luZ2xlLXBsYW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0RGl2IHtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjNTc3NTkwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4ubm9Cb3JkZXIge1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5lbGVtZW50RGVzYyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5kYW5lRGl2e1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4uYWN0aXZlQnRuIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgYmFja2dyb3VuZDogIzdFQjM1NiAhaW1wb3J0YW50O1xyXG59XHJcbi5sYXN0TWVhcyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjNTc3NTkwO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4uYnRuTWVhcyB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4zcztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogIzU3NzU5MDtcclxufVxyXG4ubGFzdE1lYXNEaXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5idG5Nb3JlTWVhcyB7XHJcbiAgYmFja2dyb3VuZDogIzdFQjM1NiAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuM3M7XHJcbn1cclxuLmJ0bk1vcmVNZWFzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNzJjYTMzICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZhLXNlYXJjaCB7XHJcblxyXG59XHJcbi5jaGFydEJ1dHRvbnMge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "oaKM":
    /*!*************************************************************!*\
      !*** ./src/app/components/main-page/main-page.component.ts ***!
      \*************************************************************/

    /*! exports provided: MainPageComponent */

    /***/
    function oaKM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
        return MainPageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_main_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./main-page.component.html */
      "22uC");
      /* harmony import */


      var _main_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main-page.component.scss */
      "/cV3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_main_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/main/main.service */
      "EFeq");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/modals/modals.service */
      "Sond");

      var MainPageComponent = /*#__PURE__*/function () {
        function MainPageComponent(main, location, router, modalsService) {
          _classCallCheck(this, MainPageComponent);

          this.main = main;
          this.location = location;
          this.router = router;
          this.modalsService = modalsService;
        }

        _createClass(MainPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user = this.main.getUser;
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "add",
          value: function add() {
            var url = this.router.url.split('/');

            if (!url[2]) {
              this.modalsService.openAddDeviceEmit();
            } else {
              this.modalsService.openAddPlantEmit();
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            this.main.logout();
          }
        }]);

        return MainPageComponent;
      }();

      MainPageComponent.ctorParameters = function () {
        return [{
          type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_7__["ModalsService"]
        }];
      };

      MainPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-main-page',
        template: _raw_loader_main_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MainPageComponent);
      /***/
    },

    /***/
    "pbNA":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function pbNA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n  <div class=\"container\">\r\n  <a class=\"navbar-brand text-warning\" href=\"#\">SmartPlant</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <div>\r\n      Witaj {{this.main.getUser.firstName}}\r\n    </div>\r\n    <ul class=\"navbar-nav mr-auto\" *ngIf=\"this.main.isUserLogged()\">\r\n\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\">Zarejestruj się</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"!this.main.isUserLogged()\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\" (click)=\"loginOpen()\">Zaloguj się</a>\r\n      </li>\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\" (click)=\"registerOpen()\">Zarejestruj się</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"this.main.isUserLogged()\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\">Twoje konto</a>\r\n      </li>\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link text-danger\" href=\"#\" (click)=\"logout()\">Wyloguj się</a>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n  </div>\r\n</nav>\r\n";
      /***/
    },

    /***/
    "q98u":
    /*!****************************************************************!*\
      !*** ./src/app/components/shared/spinner/spinner.component.ts ***!
      \****************************************************************/

    /*! exports provided: SpinnerComponent */

    /***/
    function q98u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
        return SpinnerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./spinner.component.html */
      "RhSj");
      /* harmony import */


      var _spinner_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./spinner.component.scss */
      "iEAF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SpinnerComponent = /*#__PURE__*/function () {
        function SpinnerComponent() {
          _classCallCheck(this, SpinnerComponent);
        }

        _createClass(SpinnerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SpinnerComponent;
      }();

      SpinnerComponent.ctorParameters = function () {
        return [];
      };

      SpinnerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-spinner',
        template: _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_spinner_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SpinnerComponent);
      /***/
    },

    /***/
    "rxhT":
    /*!********************************************************************************!*\
      !*** ./src/app/components/modals/you-sure-modal/you-sure-modal.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function rxhT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".btn {\n  font-size: 22px;\n}\n\n.btn-yes {\n  background: #7EB356;\n}\n\n.btn-no {\n  background: #F94144;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbHMveW91LXN1cmUtbW9kYWwveW91LXN1cmUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7QUFHRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL3lvdS1zdXJlLW1vZGFsL3lvdS1zdXJlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbi5idG4teWVzIHtcclxuICBiYWNrZ3JvdW5kOiAjN0VCMzU2O1xyXG59XHJcbi5idG4tbm8ge1xyXG4gIGJhY2tncm91bmQ6ICNGOTQxNDQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "tYur":
    /*!**********************************************************************************!*\
      !*** ./src/app/components/modals/add-plant-modal/add-plant-modal.component.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function tYur(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2FkZC1wbGFudC1tb2RhbC9hZGQtcGxhbnQtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "uK6u":
    /*!******************************************************************************!*\
      !*** ./src/app/components/modals/register-modal/register-modal.component.ts ***!
      \******************************************************************************/

    /*! exports provided: RegisterModalComponent */

    /***/
    function uK6u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterModalComponent", function () {
        return RegisterModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register-modal.component.html */
      "8ZjD");
      /* harmony import */


      var _register_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register-modal.component.scss */
      "3vxj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/modals/modals.service */
      "Sond");
      /* harmony import */


      var _core_main_main_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/main/main.service */
      "EFeq");

      var RegisterModalComponent = /*#__PURE__*/function () {
        function RegisterModalComponent(modals, main) {
          _classCallCheck(this, RegisterModalComponent);

          this.modals = modals;
          this.main = main;
          this.submitted = false;
        }

        _createClass(RegisterModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.modals.openRegister.subscribe(function () {
              console.log('open!');

              _this18.registerModalButton.nativeElement.click();
            });
            this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('jankowalski@wp.pl', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('123', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]),
              firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('Jan', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('Kowalski', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
            });
          }
        }, {
          key: "register",
          value: function register() {
            this.submitted = true;

            if (this.registerForm.valid) {
              this.main.register(this.registerForm.value);
            }
          }
        }, {
          key: "openLoginModal",
          value: function openLoginModal() {
            this.modals.openLoginEmit();
          }
        }]);

        return RegisterModalComponent;
      }();

      RegisterModalComponent.ctorParameters = function () {
        return [{
          type: _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__["ModalsService"]
        }, {
          type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_6__["MainService"]
        }];
      };

      RegisterModalComponent.propDecorators = {
        registerModalButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['registerModalButton']
        }]
      };
      RegisterModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register-modal',
        template: _raw_loader_register_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterModalComponent);
      /***/
    },

    /***/
    "v/yc":
    /*!**********************************************************************************!*\
      !*** ./src/app/components/modals/edit-data-modal/edit-data-modal.component.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function vYc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2VkaXQtZGF0YS1tb2RhbC9lZGl0LWRhdGEtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "vVB/":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/edit-plant-modal/edit-plant-modal.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vVB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button type=\"button\" class=\"btn btn-primary d-none\" data-toggle=\"modal\" data-target=\"#editPlantModal\" #editPlantModal></button>\n\n<div class=\"modal fade\" id=\"editPlantModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edytuj roślinę</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" data-dismiss=\"modal\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"editPlantForm\">\n          <div class=\"form-group\">\n            <label class=\"form-check-label d-none\" for=\"editPlantName\">Wprowadź nazwę</label>\n            <input type=\"text\" class=\"form-control\" id=\"editPlantName\" aria-describedby=\"emailHelp\" placeholder=\"Nowa nazwa\" formControlName=\"name\">\n            <div *ngIf=\"editPlantForm.controls.name.invalid && submitted\" class=\"alert alert-danger\">\n              Podaj poprawną nazwę.\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-check-label\" for=\"levelEdit\">Wybierz level</label>\n            <select class=\"form-control\" id=\"levelEdit\" formControlName=\"level\">\n              <option>1</option>\n              <option>2</option>\n              <option>3</option>\n              <option>4</option>\n              <option>5</option>\n            </select>\n          </div>\n          <div *ngIf=\"editPlantForm.controls.level.invalid && submitted\" class=\"alert alert-danger\">\n            Podaj poprawny poziom.\n          </div>\n          <div class=\"row p-0 m-0 justify-content-center\">\n            <button type=\"submit\" class=\"btn btn-add col-6\" (click)=\"edit()\" data-dismiss=\"modal\">Edytuj!</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/welcome/welcome.component */
      "JcAc");
      /* harmony import */


      var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/main-page/main-page.component */
      "oaKM");
      /* harmony import */


      var _components_devices_devices_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/devices/devices.component */
      "MCtv");
      /* harmony import */


      var _components_plants_plants_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/plants/plants.component */
      "yHqG");
      /* harmony import */


      var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./core/guards/auth.guard */
      "NUQi");
      /* harmony import */


      var _components_single_plant_single_plant_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/single-plant/single-plant.component */
      "5m3x");
      /* harmony import */


      var _core_guards_welcome_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./core/guards/welcome-auth.guard */
      "SUkG");

      var routes = [{
        path: '',
        component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"],
        canActivate: [_core_guards_welcome_auth_guard__WEBPACK_IMPORTED_MODULE_9__["WelcomeAuthGuard"]]
      }, {
        path: 'logged',
        component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [{
          path: '',
          component: _components_devices_devices_component__WEBPACK_IMPORTED_MODULE_5__["DevicesComponent"],
          pathMatch: 'full'
        }, {
          path: 'plants/:id',
          component: _components_plants_plants_component__WEBPACK_IMPORTED_MODULE_6__["PlantsComponent"]
        }, {
          path: 'plants/:id/:singleId',
          component: _components_single_plant_single_plant_component__WEBPACK_IMPORTED_MODULE_8__["SinglePlantComponent"]
        }]
      }, {
        path: '**',
        redirectTo: ''
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "wT1i":
    /*!************************************************************************!*\
      !*** ./src/app/components/modals/login-modal/login-modal.component.ts ***!
      \************************************************************************/

    /*! exports provided: LoginModalComponent */

    /***/
    function wT1i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginModalComponent", function () {
        return LoginModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login-modal.component.html */
      "S9dX");
      /* harmony import */


      var _login_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login-modal.component.scss */
      "DYss");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/modals/modals.service */
      "Sond");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _core_main_main_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/main/main.service */
      "EFeq");

      var LoginModalComponent = /*#__PURE__*/function () {
        function LoginModalComponent(modals, main) {
          _classCallCheck(this, LoginModalComponent);

          this.modals = modals;
          this.main = main;
          this.submitted = false;
        }

        _createClass(LoginModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this.modals.openLogin.subscribe(function () {
              _this19.loginModalButton.nativeElement.click();
            });
            this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('jankowalski@wp.pl', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('123', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)])
            });
          }
        }, {
          key: "login",
          value: function login() {
            this.submitted = true;

            if (this.loginForm.valid) {
              this.main.login(this.loginForm.value);
            }
          }
        }, {
          key: "openRegisterModal",
          value: function openRegisterModal() {
            this.modals.openRegisterEmit();
          }
        }]);

        return LoginModalComponent;
      }();

      LoginModalComponent.ctorParameters = function () {
        return [{
          type: _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_4__["ModalsService"]
        }, {
          type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_6__["MainService"]
        }];
      };

      LoginModalComponent.propDecorators = {
        loginModalButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['loginModalButton']
        }]
      };
      LoginModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login-modal',
        template: _raw_loader_login_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginModalComponent);
      /***/
    },

    /***/
    "yHqG":
    /*!*******************************************************!*\
      !*** ./src/app/components/plants/plants.component.ts ***!
      \*******************************************************/

    /*! exports provided: PlantsComponent */

    /***/
    function yHqG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlantsComponent", function () {
        return PlantsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_plants_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./plants.component.html */
      "PMCZ");
      /* harmony import */


      var _plants_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./plants.component.scss */
      "1He7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_main_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/main/main.service */
      "EFeq");
      /* harmony import */


      var _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../core/modals/modals.service */
      "Sond");

      var PlantsComponent = /*#__PURE__*/function () {
        function PlantsComponent(route, router, main, modals) {
          _classCallCheck(this, PlantsComponent);

          this.route = route;
          this.router = router;
          this.main = main;
          this.modals = modals;
        }

        _createClass(PlantsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var id = this.route.snapshot.paramMap.get('id');
            this.plants = this.main.getUser.devices[id].plants;
          }
        }, {
          key: "nextStep",
          value: function nextStep(id) {
            this.router.navigate(["".concat(id)], {
              relativeTo: this.route
            });
          }
        }, {
          key: "delete",
          value: function _delete(i) {
            var plantId = this.plants[i].id;
            this.main.deletePlant(plantId, i);
          }
        }, {
          key: "edit",
          value: function edit(i) {
            var plantId = this.plants[i].id;
            var plantLevel = this.plants[i].level;
            this.modals.openEditPlantEmit(plantId, plantLevel);
          }
        }]);

        return PlantsComponent;
      }();

      PlantsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
        }, {
          type: _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_6__["ModalsService"]
        }];
      };

      PlantsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-plants',
        template: _raw_loader_plants_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_plants_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PlantsComponent);
      /***/
    },

    /***/
    "yItn":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/add-device-modal/add-device-modal.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yItn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button type=\"button\" class=\"btn btn-primary d-none\" data-toggle=\"modal\" data-target=\"#addDeviceModal\" #addDeviceModal></button>\n\n<div class=\"modal fade\" id=\"addDeviceModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Dodaj nowe urządzenie</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\">\n          <span aria-hidden=\"true\" data-dismiss=\"modal\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"addDeviceForm\">\n          <div class=\"form-group\">\n            <label class=\"form-check-label d-none\" for=\"nameAddDevice\">Wprowadź nazwę</label>\n            <input type=\"email\" class=\"form-control\" id=\"nameAddDevice\" aria-describedby=\"emailHelp\" placeholder=\"Podaj nazwę\" formControlName=\"name\">\n            <div *ngIf=\"addDeviceForm.controls.name.invalid && submitted\" class=\"alert alert-danger\">\n              Podaj poprawną nazwę\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-check-label d-none\" for=\"secretKey\">Wprowadź klucz</label>\n            <input type=\"password\" class=\"form-control\" id=\"secretKey\" placeholder=\"Klucz dostępu\" formControlName=\"secretKey\">\n          </div>\n          <div *ngIf=\"addDeviceForm.controls.secretKey.invalid && submitted\" class=\"alert alert-danger\">\n            Podaj poprawny klucz\n          </div>\n          <div class=\"row p-0 m-0 justify-content-center\">\n            <button type=\"submit\" class=\"btn btn-add col-6\" (click)=\"add()\" data-dismiss=\"modal\">Dodaj!</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "yqK8":
    /*!******************************************************************************!*\
      !*** ./src/app/components/modals/you-sure-modal/you-sure-modal.component.ts ***!
      \******************************************************************************/

    /*! exports provided: YouSureModalComponent */

    /***/
    function yqK8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "YouSureModalComponent", function () {
        return YouSureModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_you_sure_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./you-sure-modal.component.html */
      "4KGf");
      /* harmony import */


      var _you_sure_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./you-sure-modal.component.scss */
      "rxhT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/modals/modals.service */
      "Sond");
      /* harmony import */


      var _core_main_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/main/main.service */
      "EFeq");

      var YouSureModalComponent = /*#__PURE__*/function () {
        function YouSureModalComponent(modals, main) {
          _classCallCheck(this, YouSureModalComponent);

          this.modals = modals;
          this.main = main;
        }

        _createClass(YouSureModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.modals.openYouSure.subscribe(function () {
              _this20.youSureModal.nativeElement.click();
            });
          }
        }, {
          key: "sureCheck",
          value: function sureCheck(bool) {
            this.modals.sureConfirmationEmit(bool);
          }
        }]);

        return YouSureModalComponent;
      }();

      YouSureModalComponent.ctorParameters = function () {
        return [{
          type: _core_modals_modals_service__WEBPACK_IMPORTED_MODULE_4__["ModalsService"]
        }, {
          type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
        }];
      };

      YouSureModalComponent.propDecorators = {
        youSureModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['youSureModal']
        }]
      };
      YouSureModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-you-sure-modal',
        template: _raw_loader_you_sure_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_you_sure_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], YouSureModalComponent);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map