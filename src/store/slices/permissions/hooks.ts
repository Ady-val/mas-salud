'use client';

import { fetchMe } from '@mas-salud/lib/apiClient';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PureAbility } from '@casl/ability';
import { Modules } from '@mas-salud/enum/modules';
import { Action } from '@mas-salud/enum/actions';

import { setUser } from '../user';

import { AppAbility, permissionsSelector, setPermissions } from '.';

export const useLoadPermissions = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const response = await fetchMe();

        const permissions = response['permissions'] as AppAbility['rules'];

        if (permissions) {
          dispatch(
            setUser({
              name: response['username'],
              username: response['username'],
              institution: response['institution'],
            }),
          );
          dispatch(setPermissions(permissions));
        } else {
          setError('No permissions found.');
        }

        setLoading(false);
      } catch (e) {
        console.error('Error fetching or setting permissions:', e);
        setError('Error fetching permissions.');
      }
    };

    fetchPermissions();
  }, [dispatch]);

  return { loading, error };
};

export const useAbilityPermissions = () => {
  const rules = useSelector(permissionsSelector);
  const ability = new PureAbility(rules);

  return { ability };
};

export const useHasPermission = (
  action: string,
  systemModule: Modules,
): boolean => {
  const { ability } = useAbilityPermissions();

  return ability.can(action, systemModule);
};

export const useHasModulePermissions = (
  systemModule: Modules,
): { read: boolean; write: boolean; update: boolean; delete: boolean } => {
  const { ability } = useAbilityPermissions();

  return {
    read: ability.can(Action.Read, systemModule),
    write: ability.can(Action.Create, systemModule),
    update: ability.can(Action.Update, systemModule),
    delete: ability.can(Action.Delete, systemModule),
  };
};
