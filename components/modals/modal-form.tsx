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
import { StoreServices } from '@/services/store-services';

interface ModalFormProps {
  onCancel: () => void;
}

export const formSchema = z.object({
  name: z.string().min(3, {
    message: 'Must be 3 or more characters long',
  }),
});

export type ModalFormValues = z.infer<typeof formSchema>;

const ModalForm = ({ onCancel }: ModalFormProps) => {
  const [loading, setLoading] = useState(false);
  const form = useForm<ModalFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = async (values: ModalFormValues) => {
    setLoading(true);
    try {
      const res = await StoreServices.createStore(values);

      // Not using the routes from next/navigation
      // because it's not going to perform a complete refresh on our page
      // like window.location.assign did.

      window.location.assign(`/${res.data.id}`);
    } catch (error) {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input disabled={loading} placeholder='E-Commerce' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex items-center justify-end space-x-2'>
          <Button disabled={loading} variant='outline' onClick={onCancel}>
            Cancel
          </Button>
          <Button disabled={loading} type='submit'>
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ModalForm;
