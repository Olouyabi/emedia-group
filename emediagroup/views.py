from multiprocessing import context
from django.shortcuts import get_object_or_404, render
from blog.models import Post
from portfolio.models import CategoriePortfolio, Portfolios
from service.models import Services, Temoignages


def home(request, category=None):
    # services
    services = Services.objects.all()
    avis = Temoignages.objects.all()

    # portfolio
    categories = CategoriePortfolio.objects.all().distinct()
    portfolios = Portfolios.objects.all().distinct().filter(status="actu").order_by("image")

    # 3 recents Posts
    posts = Post.published.all()
    context = {
        'services': services,
        'categories': categories,
        'portfolios': portfolios,
        'avis' : avis,
        'posts' : posts,

    }

    
    return render(request, 'pages/home.html', context)
