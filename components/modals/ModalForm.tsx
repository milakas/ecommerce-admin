'use client';
import * as z from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { StoreServices } from '@/components/modals/services/StoreServices';

interface ModalFormProps {
  onCancel: () => void;
}

export const formSchema = z.object({
  name: z.string().min(3, {
    message: 'Must be 3 or more characters long',
  }),
});

const ModalForm = ({ onCancel }: ModalFormProps) => {
  const [loading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      await StoreServices.createStore(values);
      toast.success('Store created.');
    } catch (error) {
      toast.error('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input disabled={loading} placeholder="E-Commerce" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-x-2 flex items-center justify-end">
          <Button disabled={loading} variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button disabled={loading} type="submit">
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ModalForm;
