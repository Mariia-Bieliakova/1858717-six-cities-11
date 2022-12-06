import { FetchStatus, NameSpace } from '../../const';
import { Offer } from '../../types/offers';
import { State } from '../../types/state';

export const getOffers = (state: State): Offer[] => state[NameSpace.Offer].offers;

export const getOffersFetchStatus = (state: State): FetchStatus =>
  state[NameSpace.Offer].fetchOffersStatus;

export const getProperty = (state: State): Offer | null => state[NameSpace.Offer].property;

export const getPropertyFetchStatus = (state: State): FetchStatus => state[NameSpace.Offer].fetchPropertyStatus;

export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Offer].nearby;

export const getNearbyFetchStatus = (state: State): FetchStatus => state[NameSpace.Offer].fetchNearbyStatus;
