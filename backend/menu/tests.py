from django.test import TestCase
from .models import Category

class CategoryModelTest(TestCase):
    def test_category_creation(self):
        """Teste se a categoria é criada com sucesso com os parâmetros corretos"""
        category = Category.objects.create(name="Pizzas Salgadas")
        self.assertEqual(category.name, "Pizzas Salgadas")
        self.assertEqual(str(category), "Pizzas Salgadas")
