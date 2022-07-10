import React, { Component } from "react";

export interface Product {
  Name: string;
  ShortDescription: null;
  Sku: string;
  ProductPrice: {
    CurrencyCode: string;
    OldPrice: null;
    Price: string;
    PriceWithDiscount: null;
    PriceValue: number;
    PriceWithDiscountValue: number;
    DiscountPercent: number;
    CustomerEntersPrice: boolean;
    CallForPrice: boolean;
    ProductId: number;
    HidePrices: boolean;
    IsRental: boolean;
    RentalPrice: null;
    DisplayTaxShippingInfo: boolean;
    BasePricePAngV: null;
    MinimumTierPrice: null;
    CustomProperties: {};
  };
  DefaultPictureModel: {
    ImageUrl: string;
    FullSizeImageUrl: null;
    Title: null;
    AlternateText: null;
    CustomProperties: {};
  };
  ReviewOverviewModel: {
    ProductId: number;
    RatingSum: number;
    AllowCustomerReviews: boolean;
    TotalReviews: number;
  };
  IsAvailable: boolean;
  Id: number;
  CustomProperties: {};
}
