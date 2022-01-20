<script lang="ts">
	import { currentUser } from '$lib/store';
</script>

<h2>Hello {$currentUser.username}</h2>
