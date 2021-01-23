from category import Category
import asyncio


async def main():
    categories = [Category('gloves'), Category('facemasks'), Category('beanies')]
    for category in categories:
        await category.update()


asyncio.run(main())
