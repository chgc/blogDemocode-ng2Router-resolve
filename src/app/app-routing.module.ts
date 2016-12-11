import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { PostsResolver } from './posts-resolver';
import { PostResolver } from './post-resolver';

const routes: Routes = [
    {
        path: 'posts',
        children: [
            {
                path: '',
                component: PostsComponent,
                resolve: {
                    posts: PostsResolver
                }
            },
            {
                path: ':id',
                component: PostComponent,
                resolve: {
                    post: PostResolver
                }
            },
            { path: '**', redirectTo: '/posts', pathMatch: 'full' }
        ]
    }, {
        path: '**', redirectTo: '/posts', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        PostsResolver,
        PostResolver
    ]
})
export class AppRoutingModule { }
