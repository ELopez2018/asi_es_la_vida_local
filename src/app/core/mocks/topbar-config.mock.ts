import { environment } from '@environments/environment';
import { TopbarConfigModel } from '@shared-primeng/layout';

export const mockTopbarConfig = (): TopbarConfigModel => {
    return {
       Title: environment.TITLE,
       Logo: environment.LOGO,
       ShowTopbarIcons: false,
       InputSearch: false,
       ToggleProfileMenu: true,
       ToggleRightPanel: false,
       ToggleSidebar: true
    };
};
