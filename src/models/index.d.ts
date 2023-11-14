import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerStrain = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Strain, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly photo?: string | null;
  readonly cross?: string | null;
  readonly description?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStrain = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Strain, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly photo?: string | null;
  readonly cross?: string | null;
  readonly description?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Strain = LazyLoading extends LazyLoadingDisabled ? EagerStrain : LazyStrain

export declare const Strain: (new (init: ModelInit<Strain>) => Strain) & {
  copyOf(source: Strain, mutator: (draft: MutableModel<Strain>) => MutableModel<Strain> | void): Strain;
}