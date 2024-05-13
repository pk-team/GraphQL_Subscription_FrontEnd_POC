<nav>
    <h2><a href="/">Subscriptions</a></h2>
	<a href="/time-entry/subscribe">Subscribe To Feed</a>
	<a href="/time-entry/list">List Time Entries</a>
	<a href="/about">About</a>
</nav>

<style>
    :global(*) {
        font-family: system-ui;
    }

	nav {
		display: flex;
		flex-direction: row;
		gap: 2rem;
        padding: 1rem;
        background: #eee;
        align-items: center;
	}

	nav a {
		text-decoration: none;
		color: black;
	}
</style>


<slot></slot>