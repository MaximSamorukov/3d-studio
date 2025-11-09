import { ConsultationEntity } from '@/entities/consultation';
import { PrintOrderEntity } from '@/entities/order';
import { Statuces } from '@/pagesComponents/Dashboard/Table/components/TableModal/components/EditDataField/Fields/OrderStatusField/constants';
import { getSubmitedOrderById } from '@/pagesComponents/Dashboard/Table/components/TableModal/utils';
import { getSubmitedOrders } from '@/pagesComponents/Dashboard/Table/utils';
import { autorun, makeAutoObservable } from 'mobx';

type CrmPreviewModalStateType = {
  id: number | null;
  pending: boolean;
  modalOpen: boolean;
  createdAt?: string | null;
  email?: string | null;
  phone?: string | null;
  plasticType?: string | null;
  orderType?: 'print_order' | 'consultation' | null;
  orderStatus?: Statuces | null;
  paymentStatus?: 'paid' | 'not_paid' | null;
};

class CrmPreviewModalState {
  private id_: CrmPreviewModalStateType['id'] = null;
  private createdAt_: CrmPreviewModalStateType['createdAt'] = null;
  private email_: CrmPreviewModalStateType['email'] = null;
  private phone_: CrmPreviewModalStateType['phone'] = null;
  private plasticType_: CrmPreviewModalStateType['plasticType'] = null;
  private orderType_: CrmPreviewModalStateType['orderType'] = null;
  private orderStatus_: CrmPreviewModalStateType['orderStatus'] = null;
  private paymentStatus_: CrmPreviewModalStateType['paymentStatus'] = null;
  private pending_: CrmPreviewModalStateType['pending'] = false;
  private modalOpen_: CrmPreviewModalStateType['modalOpen'] = false;
  constructor() {
    makeAutoObservable(this);
  }

  resetAllFields() {
    this.createdAt_ = null;
    this.email_ = null;
    this.phone_ = null;
    this.plasticType_ = null;
    this.orderType_ = null;
    this.orderStatus_ = null;
    this.paymentStatus_ = null;
    this.id_ = null;
  }

  resetField(type: keyof CrmPreviewModalStateType) {
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
      case 'id':
        this.id = null;
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

  get pending() {
    return this.pending_;
  }

  get modalOpen() {
    return this.modalOpen_;
  }
  get id() {
    return this.id_;
  }
  set id(value: CrmPreviewModalStateType['id']) {
    this.id_ = value;
  }
  set modalOpen(value: CrmPreviewModalStateType['modalOpen']) {
    this.modalOpen_ = value;
  }
  set pending(value: CrmPreviewModalStateType['pending']) {
    this.pending_ = value;
  }
  set createdAt(value: CrmPreviewModalStateType['createdAt']) {
    this.createdAt_ = value;
  }
  set email(value: CrmPreviewModalStateType['email']) {
    this.email_ = value;
  }
  set phone(value: CrmPreviewModalStateType['phone']) {
    this.phone_ = value;
  }
  set plasticType(value: CrmPreviewModalStateType['plasticType']) {
    this.plasticType_ = value;
  }
  set orderType(value: CrmPreviewModalStateType['orderType']) {
    this.orderType_ = value;
  }
  set orderStatus(value: CrmPreviewModalStateType['orderStatus']) {
    this.orderStatus_ = value;
  }
  set paymentStatus(value: CrmPreviewModalStateType['paymentStatus']) {
    this.paymentStatus_ = value;
  }
  get serialized(): Omit<CrmPreviewModalStateType, 'pending' | 'modalOpen'> {
    return {
      id: this.id_,
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

export const crmPreviewModalState = new CrmPreviewModalState();

autorun(() => {
  crmPreviewModalState.pending = true;
  if (crmPreviewModalState.id && crmPreviewModalState.orderType) {
    getSubmitedOrderById({
      id: crmPreviewModalState.id!,
      type: crmPreviewModalState.orderType!,
    })
      .then(({ data }) => {
        crmPreviewModalState.pending = false;
        if (crmPreviewModalState.orderType === 'print_order') {
          const {
            created_at,
            email,
            phone,
            plastic_type,
            order_status,
            payment_status,
          } = data;
          crmPreviewModalState.createdAt = created_at;
          crmPreviewModalState.email = email;
          crmPreviewModalState.phone = phone;
          crmPreviewModalState.plasticType = plastic_type;
          crmPreviewModalState.orderStatus = order_status;
          crmPreviewModalState.paymentStatus = payment_status;
        }
        if (crmPreviewModalState.orderType === 'consultation') {
          const { created_at, email, contact, order_status } = data;
          crmPreviewModalState.createdAt = created_at;
          crmPreviewModalState.email = email;
          crmPreviewModalState.phone = contact;
          crmPreviewModalState.orderStatus = order_status;
        }
      })
      .catch(() => {
        crmPreviewModalState.pending = false;
        crmPreviewModalState.resetAllFields();
      });
  }
});
