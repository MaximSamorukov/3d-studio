import { ConsultationEntity } from '@/entities/consultation';
import { PrintOrderEntity } from '@/entities/order';
import { getSubmitedOrders } from '@/pagesComponents/Dashboard/Table/utils';
import { autorun, makeAutoObservable } from 'mobx';

type CrmFilterStateType = {
  createdAt?: string | null;
  email?: string | null;
  phone?: string | null;
  plasticType?: string | null;
  orderType?: 'print_order' | 'consultation';
  orderStatus?: 'in_work' | 'submited' | 'rejected' | null;
  paymentStatus?: 'paid' | 'not_paid' | null;
  perPage?: number;
  page?: number;
  orders: PrintOrderEntity[];
  consultations: ConsultationEntity[];
};

class CrmFilterState {
  private createdAt_: CrmFilterStateType['createdAt'] = null;
  private email_: CrmFilterStateType['email'] = null;
  private phone_: CrmFilterStateType['phone'] = null;
  private plasticType_: CrmFilterStateType['plasticType'] = null;
  private orderType_: CrmFilterStateType['orderType'] = 'print_order';
  private orderStatus_: CrmFilterStateType['orderStatus'] = null;
  private paymentStatus_: CrmFilterStateType['paymentStatus'] = null;
  private perPage_: CrmFilterStateType['perPage'] = 25;
  private page_: CrmFilterStateType['page'] = 1;
  private orders_: CrmFilterStateType['orders'] = [];
  private consultations_: CrmFilterStateType['consultations'] = [];

  constructor() {
    makeAutoObservable(this);
  }

  resetAllFilters() {
    this.createdAt_ = null;
    this.email_ = null;
    this.phone_ = null;
    this.plasticType_ = null;
    this.orderType_ = 'print_order';
    this.orderStatus_ = null;
    this.paymentStatus_ = null;
    this.perPage_ = 25;
    this.page_ = 1;
  }

  resetFilter(type: keyof CrmFilterStateType) {
    switch (type) {
      case 'createdAt':
        this.createdAt = null;
        break;
      case 'email':
        this.email = null;
        break;
      case 'phone':
        this.phone = null;
        break;
      case 'plasticType':
        this.plasticType = null;
        break;
      case 'orderType':
        this.orderType = 'print_order';
        break;
      case 'orderStatus':
        this.orderStatus = null;
        break;
      case 'paymentStatus':
        this.paymentStatus = null;
        break;
    }
  }
  get createdAt() {
    return this.createdAt_;
  }

  get email() {
    return this.email_;
  }

  get phone() {
    return this.phone_;
  }

  get plasticType() {
    return this.plasticType_;
  }

  get orderType() {
    return this.orderType_;
  }

  get orderStatus() {
    return this.orderStatus_;
  }

  get paymentStatus() {
    return this.paymentStatus_;
  }

  get perPage() {
    return this.perPage_;
  }

  get page() {
    return this.page_;
  }

  get orders() {
    return this.orders_;
  }

  get consultations() {
    return this.consultations_;
  }

  set orders(value: CrmFilterStateType['orders']) {
    this.orders_ = value;
  }

  set consultations(value: CrmFilterStateType['consultations']) {
    this.consultations_ = value;
  }

  set perPage(value: CrmFilterStateType['perPage']) {
    this.perPage_ = value;
  }

  set page(value: CrmFilterStateType['page']) {
    this.page_ = value;
  }

  set createdAt(value: CrmFilterStateType['createdAt']) {
    this.createdAt_ = value;
  }
  set email(value: CrmFilterStateType['email']) {
    this.email_ = value;
  }
  set phone(value: CrmFilterStateType['phone']) {
    this.phone_ = value;
  }
  set plasticType(value: CrmFilterStateType['plasticType']) {
    this.plasticType_ = value;
  }
  set orderType(value: CrmFilterStateType['orderType']) {
    this.orderType_ = value;
  }
  set orderStatus(value: CrmFilterStateType['orderStatus']) {
    this.orderStatus_ = value;
  }
  set paymentStatus(value: CrmFilterStateType['paymentStatus']) {
    this.paymentStatus_ = value;
  }
  get serialized(): Omit<CrmFilterStateType, 'orders' | 'consultations'> {
    return {
      createdAt: this.createdAt_,
      email: this.email_,
      phone: this.phone_,
      plasticType: this.plasticType_,
      orderType: this.orderType_,
      orderStatus: this.orderStatus_,
      paymentStatus: this.paymentStatus_,
      perPage: this.perPage_,
      page: this.page_,
    };
  }
}

export const crmFilterState = new CrmFilterState();

autorun(() => {
  getSubmitedOrders({
    type: crmFilterState.orderType!,
    page: crmFilterState.page!,
    perPage: crmFilterState.perPage!,
  })
    .then(({ orders }) => {
      if (crmFilterState.orderType === 'consultation') {
        crmFilterState.consultations = orders;
      }
      if (crmFilterState.orderType === 'print_order') {
        crmFilterState.orders = orders;
      }
    })
    .catch(() => {
      crmFilterState.consultations = [];
      crmFilterState.orders = [];
    });
});
