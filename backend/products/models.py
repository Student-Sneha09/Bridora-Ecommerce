from django.db import models


class Product(models.Model):
    CATEGORY_CHOICES = [
        ("necklaces", "Necklaces"),
        ("earrings", "Earrings"),
        ("bracelets", "Bracelets"),
    ]

    name = models.CharField(max_length=200)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    image = models.ImageField(upload_to="products/")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
# model created
