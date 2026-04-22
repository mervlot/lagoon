'use client';

import { useState } from 'react';
import { OptimizedImage } from '@/components/optimized-image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { menu, type Dish } from '@/lib/menu-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useToast } from '@/hooks/use-toast';

type CartItem = {
  dish: Dish;
  quantity: number;
};

export function OrderClient() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (dish: Dish) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.dish.id === dish.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { dish, quantity: 1 }];
    });
  };

  const removeFromCart = (dishId: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.dish.id === dishId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.dish.id === dishId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter((item) => item.dish.id !== dishId);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.dish.price * item.quantity, 0);
  };

  const handlePlaceOrder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    
    console.log("Placing order for:", name, cart);
    toast({
      title: "Order Placed!",
      description: `Thank you, ${name}! Your order is being prepared.`
    })
    clearCart();
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {menu.map((dish) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === dish.imageId
            );
            return (
              <Card
                key={dish.id}
                className="flex flex-col overflow-hidden"
              >
                <CardHeader className="p-0">
                  <div className="relative aspect-video w-full">
                    {image && (
                      <OptimizedImage
                        src={image.imageUrl}
                        alt={dish.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                        data-ai-hint={image.imageHint}
                        quality={80}
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-4">
                  <CardTitle className="font-headline text-lg">
                    {dish.name}
                  </CardTitle>
                  <CardDescription className="mt-1 text-sm">
                    {dish.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex items-center justify-between p-4 pt-0">
                  <p className="font-semibold text-primary">
                    ${dish.price.toFixed(2)}
                  </p>
                  <Button size="sm" onClick={() => addToCart(dish)}>
                    <Plus className="mr-2 h-4 w-4" /> Add
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="lg:col-span-1">
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <ShoppingCart className="h-6 w-6" /> Your Order
            </CardTitle>
          </CardHeader>
          <CardContent>
            {cart.length === 0 ? (
              <p className="text-muted-foreground">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.dish.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.dish.name}</p>
                      <p className="text-sm text-muted-foreground">
                        ${item.dish.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => removeFromCart(item.dish.id)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => addToCart(item.dish)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between font-bold">
                  <p>Total</p>
                  <p>${getCartTotal().toFixed(2)}</p>
                </div>
                 <form className="space-y-4 pt-4" onSubmit={handlePlaceOrder}>
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" required placeholder="Your name for the order" />
                    </div>
                    <Button type="submit" className="w-full" disabled={cart.length === 0}>
                        Place Order
                    </Button>
                 </form>
              </div>
            )}
          </CardContent>
          {cart.length > 0 && (
            <CardFooter>
              <Button
                variant="outline"
                className="w-full"
                onClick={clearCart}
              >
                <Trash2 className="mr-2 h-4 w-4" /> Clear Cart
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  );
}
