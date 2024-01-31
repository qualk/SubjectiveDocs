# The `sj` CLI and the `subjective` Library

[`sj`](https://github.com/SubjectiveLabs/sj) is a command-line interface (CLI) for students to organise and manage their timetables and subjects. Intended as a companion to the more user-friendly interface of other Subjective apps, it serves as a fast and powerful tool for developers.

The CLI uses the backend library `subjective` to perform its operations. This library is also available for use by developers to create their own apps to interact with Subjective data.

## Installation

### `sj`

The `sj` CLI is available on GitHub at [https://github.com/SubjectiveLabs/sj](https://github.com/SubjectiveLabs/sj).

It uses the Rust programming language, so you will need to install the Rust toolchain to build it. You can do this by following the instructions at [https://rustup.rs](https://rustup.rs).

It uses the `subjective` library, included in the same repository.

You can either clone and build it manually:

```bash
# Clone the repository
# Pass `--depth 1` to only clone the latest commit
# Or use `gh repo clone SubjectiveLabs/sj` if you have the GitHub CLI installed
git clone https://github.com/SubjectiveLabs/sj
cd sj
cargo install --path .

```

or install it using Cargo:

```bash
cargo install --git https://github.com/SubjectiveLabs/sj
```

### `subjective`

The `subjective` library is available on GitHub at [https://github.com/SubjectiveLabs/sj], together with its CLI `sj`.

Add it to your `Cargo.toml` file:

```toml
[dependencies]
subjective = { git = "https://github.com/SubjectiveLabs/sj" }
```

Or use Cargo:

```bash
cargo add --git https://github.com/SubjectiveLabs/sj
```
