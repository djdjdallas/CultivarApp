/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StrainCreateFormInputValues = {
    title?: string;
    photo?: string;
    cross?: string;
    description?: string;
    price?: number;
};
export declare type StrainCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    photo?: ValidationFunction<string>;
    cross?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StrainCreateFormOverridesProps = {
    StrainCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    photo?: PrimitiveOverrideProps<TextFieldProps>;
    cross?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StrainCreateFormProps = React.PropsWithChildren<{
    overrides?: StrainCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StrainCreateFormInputValues) => StrainCreateFormInputValues;
    onSuccess?: (fields: StrainCreateFormInputValues) => void;
    onError?: (fields: StrainCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StrainCreateFormInputValues) => StrainCreateFormInputValues;
    onValidate?: StrainCreateFormValidationValues;
} & React.CSSProperties>;
export default function StrainCreateForm(props: StrainCreateFormProps): React.ReactElement;
