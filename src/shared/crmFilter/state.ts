import { makeAutoObservable } from 'mobx';

type CrmFilterStateType = {
  createdAt?: string | null;
  email?: string | null;
  phone?: string | null;
  plasticType?: string | null;
  orderType?: 'print_order' | 'consultation' | null;
  orderStatus?: 'in_work' | 'submited' | 'rejected' | null;
  paymentStatus?: 'paid' | 'not_paid' | null;
};

class CrmFilterState {
  private createdAt_: CrmFilterStateType['createdAt'] = null;
  private email_: CrmFilterStateType['email'] = null;
  private phone_: CrmFilterStateType['phone'] = null;
  private plasticType_: CrmFilterStateType['plasticType'] = null;
  private orderType_: CrmFilterStateType['orderType'] = null;
  private orderStatus_: CrmFilterStateType['orderStatus'] = null;
  private paymentStatus_: CrmFilterStateType['paymentStatus'] = null;

  constructor() {
    makeAutoObservable(this);
  }

  resetAllFilters() {
    this.createdAt_ = null;
    this.email_ = null;
    this.phone_ = null;
    this.plasticType_ = null;
    this.orderType_ = null;
    this.orderStatus_ = null;
    this.paymentStatus_ = null;
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
        this.orderType = null;
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
  get serialized(): CrmFilterStateType {
    return {
      createdAt: this.createdAt_,
      email: this.email_,
      phone: this.phone_,
      plasticType: this.plasticType_,
      orderType: this.orderType_,
      orderStatus: this.orderStatus_,
      paymentStatus: this.paymentStatus_,
    };
  }
}

export const crmFilterState = new CrmFilterState();
