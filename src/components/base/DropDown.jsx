import { Fragment, useState } from 'react';
import { ListBox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@headlessui/react';

function DropDown({ list, parentStateSelect, setParentStateSelect }) {
  const [selfStateSelected, setSelfStateSelected] = useState(list[0]);

  const selected = parentStateSelected == null ? selfStateSelected : parentStateSelect;
  const setSelected = setParentStateSelect == null ? setSelfStateSelected : setParentStateSelect;

  return ();
}

export default DropDown;
