from rest_framework import serializers
from .models import Order, OrderItem


class OrderItemCreateSerializer(serializers.Serializer):
    product_id = serializers.IntegerField()
    quantity = serializers.IntegerField(min_value=1)
    price = serializers.DecimalField(max_digits=10, decimal_places=2)


class OrderCreateSerializer(serializers.Serializer):
    customer_name = serializers.CharField(max_length=200)
    email = serializers.EmailField(required=False, allow_blank=True)
    phone = serializers.CharField(max_length=20)
    address = serializers.CharField()
    total_amount = serializers.DecimalField(max_digits=10, decimal_places=2)
    items = OrderItemCreateSerializer(many=True)


class OrderItemSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source="product.name", read_only=True)

    class Meta:
        model = OrderItem
        fields = ["id", "product", "product_name", "quantity", "price"]


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = [
            "id",
            "customer_name",
            "email",
            "phone",
            "address",
            "total_amount",
            "created_at",
            "items",
        ]