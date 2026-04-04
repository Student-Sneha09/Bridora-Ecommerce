from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer


class ProductListView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all().order_by("-id")
        category = self.request.query_params.get("category")
        if category:
            queryset = queryset.filter(category=category)
        return queryset

    def get_serializer_context(self):
        return {"request": self.request}


class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_serializer_context(self):
        return {"request": self.request}