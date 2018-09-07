import { LibraryPage } from './../library/library';
import { FavoritePage } from './../favorite/favorite';
import { Component } from '@angular/core';

@Component({
    selector : "page-tabs",
    templateUrl : './tabs.page.html'
})
export class TabsPage{
    favoritePage = FavoritePage;
    libraryPage = LibraryPage;
}
