from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from products.models import Product
from .models import Order, OrderItem
from .serializers import OrderCreateSerializer, OrderSerializer


class CreateOrderView(APIView):
    def post(self, request):
        serializer = OrderCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data

        order = Order.objects.create(
            customer_name=data["customer_name"],
            email=data.get("email", ""),
            phone=data["phone"],
            address=data["address"],
            total_amount=data["total_amount"],
        )

        for item in data["items"]:
            product = Product.objects.get(id=item["product_id"])
            OrderItem.objects.create(
                order=order,
                product=product,
                quantity=item["quantity"],
                price=item["price"],
            )

        return Response(
            OrderSerializer(order).data,
            status=status.HTTP_201_CREATED
        )