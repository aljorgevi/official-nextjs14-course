'use client'

import { deleteInvoice } from '@/app/lib/actions'
import { promiseToast } from '@/app/utilities/toast'
import { TrashIcon } from '@heroicons/react/24/outline'

export function DeleteInvoice({ id }: { id: string }) {
	async function handleSubmit(formData: FormData) {
		promiseToast(deleteInvoice(formData))
	}

	return (
		<form action={handleSubmit}>
			<input type='hidden' name='id' value={id} />
			<button className='rounded-md border p-1'>
				<TrashIcon className='w-4' />
			</button>
		</form>
	)
}
