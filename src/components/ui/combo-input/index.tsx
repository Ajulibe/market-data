// import * as React from 'react';

// import {
//   ChevronsIcon,
//   IconWrapper,
//   PopoverContainer,
//   PopoverContentContainer,
//   PopoverTriggerButton,
// } from './StyledComponents';
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from '@/components/ui/command';
// import {
//   Popover,
//   PopoverTrigger,
// } from '@/components/ui/popover';

// const frameworks = [
//   {
//     value: 'next.js',
//     label: 'Next.js',
//   },
//   {
//     value: 'sveltekit',
//     label: 'SvelteKit',
//   },
//   {
//     value: 'nuxt.js',
//     label: 'Nuxt.js',
//   },
//   {
//     value: 'remix',
//     label: 'Remix',
//   },
//   {
//     value: 'astro',
//     label: 'Astro',
//   },
// ];

// export function ComboboxDemo() {
//   const [open, setOpen] = React.useState(false);
//   const [value, setValue] = React.useState('');

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <PopoverTriggerButton
//           variant='outline'
//           role='combobox'
//           aria-expanded={open}
//         >
//           {value
//             ? frameworks.find((framework) => framework.value === value)?.label
//             : 'Select a pair...'}
//         </PopoverTriggerButton>
//       </PopoverTrigger>
//       <PopoverContentContainer>
//         <Command>
//           <CommandInput placeholder='Search framework...' />
//           <CommandList>
//             <CommandEmpty>No framework found.</CommandEmpty>
//             <CommandGroup>
//               {frameworks.map((framework) => (
//                 <CommandItem
//                   key={framework.value}
//                   value={framework.value}
//                   onSelect={(currentValue) => {
//                     setValue(currentValue === value ? '' : currentValue);
//                     setOpen(false);
//                   }}
//                 >
//                   {framework.label}
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContentContainer>
//     </Popover>
//   );
// }
