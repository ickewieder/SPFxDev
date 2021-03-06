import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import '@webcomponents/custom-elements/src/native-shim';
import 'core-js/es7/reflect';
export interface IHelloSharePointWebPartProps {
    description: string;
}
export default class HelloSharePointWebPart extends BaseClientSideWebPart<IHelloSharePointWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
