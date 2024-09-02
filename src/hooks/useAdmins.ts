import getAdminData from '@/data/admins';
import { useQuery } from '@tanstack/react-query';
import { Admin } from '@/entities/admin';
import { useEffect, useState } from 'react';
import APIClient from '@/services/apiClient';

const apiClient = new APIClient<Admin>('/admins');

const useAdmins = () => {
  return useQuery<Admin[], Error>({
    queryKey: ['admins'],
    queryFn: apiClient.getAll,
  });
};

export default useAdmins;
