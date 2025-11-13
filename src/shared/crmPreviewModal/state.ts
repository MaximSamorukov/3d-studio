import { ConsultationEntity } from '@/entities/consultation';
import { PrintOrderEntity } from '@/entities/order';
import { Statuces } from '@/pagesComponents/Dashboard/Table/components/TableModal/components/EditDataField/Fields/OrderStatusField/constants';
import { getSubmitedOrderById } from '@/pagesComponents/Dashboard/Table/components/TableModal/utils';
import { getSubmitedOrders } from '@/pagesComponents/Dashboard/Table/utils';
import { autorun, makeAutoObservable } from 'mobx';

type CrmPreviewModalStateType = {
  id: number | null;
  pending: boolean;
  deletePending: boolean;
  modalOpen: boolean;
  createdAt?: string | null;
  email?: string | null;
  phone?: string | null;
  plasticType?: string | null;
  orderType?: 'print_order' | 'consultation' | null;
  orderStatus?: Statuces | null;
  paymentStatus?: 'paid' | 'not_paid' | null;
  filePath?: string | null;
  price?: number | null;
  with_modelling?: boolean;
  with_postprocessing?: boolean;
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
  private deletePending_: CrmPreviewModalStateType['deletePending'] = false;
  private modalOpen_: CrmPreviewModalStateType['modalOpen'] = false;
  private filePath_: CrmPreviewModalStateType['filePath'] = null;
  private price_: CrmPreviewModalStateType['price'] = null;
  private with_modelling_: CrmPreviewModalStateType['with_modelling'] = false;
  private with_postprocessing_: CrmPreviewModalState['with_postprocessing'] =
    false;
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
    this.filePath_ = null;
    this.price_ = null;
    this.with_modelling_ = false;
    this.with_postprocessing_ = false;
  }

  resetField(type: keyof CrmPreviewModalStateType) {
    switch (type) {
      case 'createdAt':
        this.createdAt_ = null;
        break;
      case 'email':
        this.email_ = null;
        break;
      case 'phone':
        this.phone_ = null;
        break;
      case 'plasticType':
        this.plasticType_ = null;
        break;
      case 'orderType':
        this.orderType_ = 'print_order';
        break;
      case 'orderStatus':
        this.orderStatus_ = null;
        break;
      case 'paymentStatus':
        this.paymentStatus_ = null;
        break;
      case 'id':
        this.id_ = null;
        break;
      case 'filePath':
        this.filePath_ = null;
        break;
      case 'price':
        this.price_ = null;
        break;
      case 'with_modelling':
        this.with_modelling_ = false;
        break;
      case 'with_postprocessing':
        this.with_postprocessing_ = false;
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
  get deletePending() {
    return this.deletePending_;
  }

  get modalOpen() {
    return this.modalOpen_;
  }
  get id() {
    return this.id_;
  }
  get filePath() {
    return this.filePath_;
  }
  get price() {
    return this.price_;
  }
  get with_modelling() {
    return this.with_modelling_;
  }
  get with_postprocessing() {
    return this.with_postprocessing_;
  }
  set with_postprocessing(
    value: CrmPreviewModalStateType['with_postprocessing'],
  ) {
    this.with_postprocessing_ = value || false;
  }
  set with_modelling(value: CrmPreviewModalStateType['with_modelling']) {
    this.with_modelling_ = value || false;
  }

  set price(value: CrmPreviewModalStateType['price']) {
    this.price_ = value || null;
  }
  set filePath(value: CrmPreviewModalStateType['filePath']) {
    this.filePath_ = value || null;
  }
  set id(value: CrmPreviewModalStateType['id']) {
    this.id_ = value || null;
  }
  set modalOpen(value: CrmPreviewModalStateType['modalOpen']) {
    this.modalOpen_ = value;
  }
  set pending(value: CrmPreviewModalStateType['pending']) {
    this.pending_ = value || false;
  }
  set deletePending(value: CrmPreviewModalStateType['deletePending']) {
    this.deletePending_ = value || false;
  }
  set createdAt(value: CrmPreviewModalStateType['createdAt']) {
    this.createdAt_ = value || null;
  }
  set email(value: CrmPreviewModalStateType['email']) {
    this.email_ = value || null;
  }
  set phone(value: CrmPreviewModalStateType['phone']) {
    this.phone_ = value || null;
  }
  set plasticType(value: CrmPreviewModalStateType['plasticType']) {
    this.plasticType_ = value || null;
  }
  set orderType(value: CrmPreviewModalStateType['orderType']) {
    this.orderType_ = value || null;
  }
  set orderStatus(value: CrmPreviewModalStateType['orderStatus']) {
    this.orderStatus_ = value || null;
  }
  set paymentStatus(value: CrmPreviewModalStateType['paymentStatus']) {
    this.paymentStatus_ = value || null;
  }
  get serialized(): Omit<
    CrmPreviewModalStateType,
    'pending' | 'modalOpen' | 'deletePending'
  > {
    return {
      id: this.id_,
      createdAt: this.createdAt_,
      email: this.email_,
      phone: this.phone_,
      plasticType: this.plasticType_,
      orderType: this.orderType_,
      orderStatus: this.orderStatus_,
      paymentStatus: this.paymentStatus_,
      filePath: this.filePath_,
      price: this.price_,
      with_modelling: this.with_modelling_,
      with_postprocessing: this.with_postprocessing_,
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
            file_path,
            price,
            with_modelling,
            with_postprocessing,
          } = data;
          crmPreviewModalState.createdAt = created_at;
          crmPreviewModalState.email = email;
          crmPreviewModalState.phone = phone;
          crmPreviewModalState.plasticType = plastic_type;
          crmPreviewModalState.orderStatus = order_status;
          crmPreviewModalState.paymentStatus = payment_status;
          crmPreviewModalState.filePath = file_path;
          crmPreviewModalState.price = price;
          crmPreviewModalState.with_modelling = with_modelling;
          crmPreviewModalState.with_postprocessing = with_postprocessing;
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
