from category import Category
import asyncio


def main():
    categories = [Category('gloves'), Category('facemasks'), Category('beanies')]
    for category in categories:
        category.update()


main()