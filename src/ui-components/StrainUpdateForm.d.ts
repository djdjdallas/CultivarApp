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
export declare type StrainUpdateFormInputValues = {
    title?: string;
    photo?: string;
    cross?: string;
    description?: string;
    price?: number;
};
export declare type StrainUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    photo?: ValidationFunction<string>;
    cross?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StrainUpdateFormOverridesProps = {
    StrainUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    photo?: PrimitiveOverrideProps<TextFieldProps>;
    cross?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StrainUpdateFormProps = React.PropsWithChildren<{
    overrides?: StrainUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    strain?: any;
    onSubmit?: (fields: StrainUpdateFormInputValues) => StrainUpdateFormInputValues;
    onSuccess?: (fields: StrainUpdateFormInputValues) => void;
    onError?: (fields: StrainUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StrainUpdateFormInputValues) => StrainUpdateFormInputValues;
    onValidate?: StrainUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StrainUpdateForm(props: StrainUpdateFormProps): React.ReactElement;
