import {EditorSidebarItemComponent} from "./editor-sidebar-item/editor-sidebar-item.component";
import {Component} from "@angular/core";

require("./editor-sidebar.component.scss");

// @WorkspaceComponent({
//     name: "Good Title"
// })
@Component({

    selector: "editor-sidebar",
    directives: [EditorSidebarItemComponent],
    template: `
            <nav>
                <editor-sidebar-item title="Project" icon="files-o"></editor-sidebar-item>
                <editor-sidebar-item title="Apps" icon="sitemap"></editor-sidebar-item>
                <editor-sidebar-item title="Settings" icon="cog"></editor-sidebar-item>
            </nav>
    `
})
export class EditorSidebarComponent {

}
