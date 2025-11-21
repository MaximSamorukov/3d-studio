import { ConsultationEntity } from '@/entities/consultation';
import { PrintOrderEntity } from '@/entities/order';
import { Statuces } from '@/shared/constants/constants';
import { getSubmitedOrderById } from '@/widgets/CRMDashboard/Table/ui/TableModal/api/utils';
import { getSubmitedOrders } from '@/widgets/CRMDashboard/Table/api/utils';
import { autorun, makeAutoObservable } from 'mobx';
import { PrintOrderType } from '../../types/types';

type CrmPreviewModalStateType = PrintOrderType & {
  pending?: boolean;
  deletePending: boolean;
  modalOpen: boolean;
  orderType: 'consultation' | 'print_order' | null;
};

class CrmPreviewModalState {
  private id_: CrmPreviewModalStateType['id'] = null;
  private createdAt_: CrmPreviewModalStateType['created_at'] = null;
  private email_: CrmPreviewModalStateType['email'] = null;
  private phone_: CrmPreviewModalStateType['phone'] = null;
  private plasticType_: CrmPreviewModalStateType['plastic_type'] = null;
  private orderType_: CrmPreviewModalStateType['orderType'] = null;
  private orderStatus_: CrmPreviewModalStateType['order_status'] = null;
  private paymentStatus_: CrmPreviewModalStateType['payment_status'] = null;
  private pending_: CrmPreviewModalStateType['pending'] = false;
  private deletePending_: CrmPreviewModalStateType['deletePending'] = false;
  private modalOpen_: CrmPreviewModalStateType['modalOpen'] = false;
  private filePath_: CrmPreviewModalStateType['file_path'] = null;
  private price_: CrmPreviewModalStateType['price'] = null;
  private with_modelling_: CrmPreviewModalStateType['with_modelling'] = false;
  private invoice_url_: CrmPreviewModalStateType['invoice_url'] = null;
  private with_postprocessing_: CrmPreviewModalState['with_postprocessing'] =
    false;
  private original_: Pick<
    CrmPreviewModalState,
    'price' | 'orderStatus' | 'with_modelling' | 'with_postprocessing'
  > = {
    price: null,
    orderStatus: null,
    with_modelling: false,
    with_postprocessing: false,
  };
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
    this.invoice_url_ = null;
  }

  resetField(type: keyof CrmPreviewModalStateType) {
    switch (type) {
      case 'created_at':
        this.createdAt_ = null;
        break;
      case 'email':
        this.email_ = null;
        break;
      case 'phone':
        this.phone_ = null;
        break;
      case 'plastic_type':
        this.plasticType_ = null;
        break;
      case 'orderType':
        this.orderType_ = 'print_order';
        break;
      case 'order_status':
        this.orderStatus_ = null;
        break;
      case 'payment_status':
        this.paymentStatus_ = null;
        break;
      case 'id':
        this.id_ = null;
        break;
      case 'file_path':
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
  get invoice_url() {
    return this.invoice_url_;
  }
  get with_postprocessing() {
    return this.with_postprocessing_;
  }
  get originalPrice() {
    return this.original_.price;
  }
  get originalOrderStatus() {
    return this.original_.orderStatus;
  }
  get originalWithModelling() {
    return this.original_.with_modelling;
  }
  get originalWithPostProcessing() {
    return this.original_.with_postprocessing;
  }
  set originalPrice(value: CrmPreviewModalStateType['price']) {
    this.original_.price = value;
  }
  set originalOrderStatus(value: CrmPreviewModalStateType['order_status']) {
    this.original_.orderStatus = value;
  }
  set originalWithModelling(value: CrmPreviewModalStateType['with_modelling']) {
    this.original_.with_modelling = value;
  }
  set originalWithPostProcessing(
    value: CrmPreviewModalStateType['with_postprocessing'],
  ) {
    this.original_.with_postprocessing = value;
  }

  set with_postprocessing(
    value: CrmPreviewModalStateType['with_postprocessing'],
  ) {
    this.with_postprocessing_ = value || false;
  }
  set with_modelling(value: CrmPreviewModalStateType['with_modelling']) {
    this.with_modelling_ = value || false;
  }
  set invoice_url(value: CrmPreviewModalStateType['invoice_url']) {
    this.invoice_url_ = value || null;
  }
  set price(value: CrmPreviewModalStateType['price']) {
    this.price_ = value || null;
  }
  set filePath(value: CrmPreviewModalStateType['file_path']) {
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
  set createdAt(value: CrmPreviewModalStateType['created_at']) {
    this.createdAt_ = value || null;
  }
  set email(value: CrmPreviewModalStateType['email']) {
    this.email_ = value || null;
  }
  set phone(value: CrmPreviewModalStateType['phone']) {
    this.phone_ = value || null;
  }
  set plasticType(value: CrmPreviewModalStateType['plastic_type']) {
    this.plasticType_ = value || null;
  }
  set orderType(value: CrmPreviewModalStateType['orderType']) {
    this.orderType_ = value || null;
  }
  set orderStatus(value: CrmPreviewModalStateType['order_status']) {
    this.orderStatus_ = value || null;
  }
  set paymentStatus(value: CrmPreviewModalStateType['payment_status']) {
    this.paymentStatus_ = value || null;
  }
  get serialized(): Omit<
    CrmPreviewModalStateType,
    'pending' | 'modalOpen' | 'deletePending'
  > {
    return {
      id: this.id_,
      created_at: this.createdAt_,
      email: this.email_,
      phone: this.phone_,
      plastic_type: this.plasticType_,
      orderType: this.orderType_,
      order_status: this.orderStatus_,
      payment_status: this.paymentStatus_,
      file_path: this.filePath_,
      price: this.price_,
      with_modelling: this.with_modelling_,
      with_postprocessing: this.with_postprocessing_,
      invoice_url: this.invoice_url_,
    };
  }
  refresh() {
    this.pending = true;
    if (this.id && this.orderType) {
      getSubmitedOrderById({
        id: this.id!,
        type: this.orderType!,
      })
        .then(({ data }) => {
          this.pending = false;
          if (this.orderType === 'print_order') {
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
              invoice_url,
            } = data;
            this.createdAt = created_at;
            this.email = email;
            this.invoice_url = invoice_url;
            this.phone = phone;
            this.plasticType = plastic_type;
            this.paymentStatus = payment_status;
            this.filePath = file_path;
            this.orderStatus = order_status;
            this.price = price;
            this.with_modelling = with_modelling;
            this.with_postprocessing = with_postprocessing;
            this.originalOrderStatus = order_status;
            this.originalPrice = price;
            this.originalWithModelling = with_modelling;
            this.originalWithPostProcessing = with_postprocessing;
          }
          if (this.orderType === 'consultation') {
            const { created_at, email, contact, order_status } = data;
            this.createdAt = created_at;
            this.email = email;
            this.phone = contact;
            this.orderStatus = order_status;
          }
        })
        .catch(() => {
          this.pending = false;
          this.resetAllFields();
        });
    }
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
            invoice_url,
          } = data;
          crmPreviewModalState.createdAt = created_at;
          crmPreviewModalState.email = email;
          crmPreviewModalState.phone = phone;
          crmPreviewModalState.plasticType = plastic_type;
          crmPreviewModalState.paymentStatus = payment_status;
          crmPreviewModalState.filePath = file_path;
          crmPreviewModalState.orderStatus = order_status;
          crmPreviewModalState.price = price;
          crmPreviewModalState.with_modelling = with_modelling;
          crmPreviewModalState.with_postprocessing = with_postprocessing;
          crmPreviewModalState.originalOrderStatus = order_status;
          crmPreviewModalState.originalPrice = price;
          crmPreviewModalState.originalWithModelling = with_modelling;
          crmPreviewModalState.originalWithPostProcessing = with_postprocessing;
          crmPreviewModalState.invoice_url = invoice_url;
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
