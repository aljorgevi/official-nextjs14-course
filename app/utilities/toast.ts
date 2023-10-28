import { toast } from 'sonner'

export function promiseToast(
	promise: Promise<any>,
	{ loading = 'Loading...', success = 'Success', error = 'Error' } = {}
) {
	toast.promise(promise, {
		loading,
		success: () => success,
		error
	})
}
