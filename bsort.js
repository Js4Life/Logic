function bubble(arr) {
	do {
		var swapped = false;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > arr[i + 1]) {
				var temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}

	} while (swapped);

}

bubble([3, 2, 1]);