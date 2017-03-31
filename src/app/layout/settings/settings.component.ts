import {Component, ViewChild} from "@angular/core";
import {AuthService} from "../../auth/auth/auth.service";
import {SettingsService} from "../../services/settings/settings.service";
import {DirectiveBase} from "../../util/directive-base/directive-base";
import {CredentialsFormComponent} from "../credentials-form/credentials-form.component";

type ViewMode = "auth" | "keyBindings" | "cache";

@Component({
    selector: "ct-settings",
    styleUrls: ["./settings.component.scss"],
    template: `
        <ct-action-bar>

            <ct-tab-selector [distribute]="'auto'" [active]="viewMode" (activeChange)="switchTab($event)">
                <ct-tab-selector-entry tabName="auth">Authentication</ct-tab-selector-entry>
                <ct-tab-selector-entry tabName="keyBindings">Key Bindings</ct-tab-selector-entry>
                <ct-tab-selector-entry tabName="cache">Cache</ct-tab-selector-entry>
            </ct-tab-selector>

            <div class="document-controls pr-1">

                <!--Add Another-->
                <button (click)="addEntry()"
                        class="btn btn-sm btn-secondary text-inherit"
                        type="button"> Add an Account
                </button>

                <!--Save-->
                <button (click)="applyChanges()"
                        class="btn btn-sm btn-secondary text-inherit"
                        type="button"> Apply Changes
                </button>

            </div>

        </ct-action-bar>
        
        <ct-line-loader *ngIf="auth.authenticationProgress | async"></ct-line-loader>
        
        <ct-credentials-form class="m-2"></ct-credentials-form>

    `
})
export class SettingsComponent extends DirectiveBase {
    viewMode: ViewMode = "auth";

    @ViewChild(CredentialsFormComponent)
    private credentialsFormComponent: CredentialsFormComponent;

    constructor(private settings: SettingsService,
                public auth: AuthService) {

        super();
    }

    /**
     * Changes the view mode
     * @param tab Name of the tab to switch to
     */
    switchTab(tab: ViewMode): void {
        this.viewMode = tab;
    }

    addEntry() {
        this.credentialsFormComponent.addEntry();
    }

    applyChanges() {
        this.credentialsFormComponent.applyValues();
    }


}