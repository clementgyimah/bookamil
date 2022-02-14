import * as React from 'react'
import { TCloseModal, TButtonAction } from '.'

// interfaces
interface IIdustryIdentifiers {
  type: string
  identifier: string
}

interface IReadingModes {
  text: boolean
  image: boolean
}

interface IPanelizationSummary {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}

interface IImageLinks {
  smallThumbnail: string
  thumbnail: string
}

interface IVolumeInfo {
  title: string
  subtitle: string
  authors: [string]
  publisher: string
  publishedDate: string
  description: string
  industryIdentifiers: [IIdustryIdentifiers]
  readingModes: [IReadingModes]
  pageCount: number
  printType: string
  categories: [string]
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary: [IPanelizationSummary]
  imageLinks: IImageLinks
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}

interface ISaleInfo {
  country: string
  saleability: string
  isEbook: boolean
}

interface IEpub {
  isAvailable: boolean
}

interface IPdf {
  isAvailable: boolean
  downloadLink?: string
}

interface IAccessInfo {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: IEpub
  pdf: IPdf
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}

interface ISearchInfo {
  textSnippet: string
}

interface IBookItems {
  accessInfo: IAccessInfo
  etag: string
  id: string
  kind: string
  saleInfo: ISaleInfo
  searchInfo?: ISearchInfo
  selfLink: string
  volumeInfo: IVolumeInfo
}

interface IBook {
  totalItems: number
  kind: string
  items: [] | [IBookItems]
}

interface IBookCardProps {
  key: string
  bookItem: IBookItems
}

interface IBookModalProps {
  show: boolean
  close: TCloseModal
  data: IBookItems
}

interface IIconProps {
  color: string
  size: number
  className?: string
  style?: object
  attr?: object
  title: string
  iconAction?: TCloseModal
}

interface ITextValidatorProps {
  theText: string
  maxLength: number
}

interface IButtonProps {
  title: string
  showOpenNewTabIcon: boolean
  buttonAction: TButtonAction
}

interface IErrorBoundaryProps {
  props: any
}

interface IErrorBoundaryState {
  error: Error | null
  errorInfo: React.ErrorInfo | null
}

export type {
  IIdustryIdentifiers,
  IReadingModes,
  IPanelizationSummary,
  IImageLinks,
  IVolumeInfo,
  ISaleInfo,
  IEpub,
  IPdf,
  IAccessInfo,
  ISearchInfo,
  IBookItems,
  IBook,
  IBookCardProps,
  IBookModalProps,
  IIconProps,
  ITextValidatorProps,
  IButtonProps,
  IErrorBoundaryProps,
  IErrorBoundaryState,
}
