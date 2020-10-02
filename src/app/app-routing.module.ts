import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './user/login/login.component';
import { ContactComponent } from './contact/contact.component';
import { StoreComponent } from './store/store.component';


const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'stores', component: StoresComponent },
  // { path: 'stores/books', component: BooksComponent },
  // { path: 'stores/books/book1', component: Book1Component },
  // { path: 'stores/books/book2', component: Book2Component },
  // { path: 'stores/books/book3', component: Book3Component },
  // { path: 'stores/books/book4', component: Book4Component },  
  // { path: '', redirectTo: 'home', pathMatch: 'full' }

  { path: 'about', component: AboutComponent },
  

  { path: 'store',component:StoreComponent},
  { path : 'login', component : LoginComponent},
  { path : 'contact', component : ContactComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
