// Copyright (C) Parity Technologies (UK) Ltd.
// This file is part of Polkadot.

// Polkadot is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Polkadot is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Polkadot.  If not, see <http://www.gnu.org/licenses/>.

/// A priority assigned to preparation of a PVF.
#[derive(Clone, Copy, Debug, PartialEq, Eq, PartialOrd, Ord)]
pub enum Priority {
	/// Normal priority for things that do not require immediate response, but still need to be
	/// done pretty quick.
	///
	/// Backing falls into this category.
	Normal,
	/// This priority is used for requests that are required to be processed as soon as possible.
	///
	/// Disputes and approvals are on a critical path and require execution as soon as
	/// possible to not delay finality.
	Critical,
}

impl Priority {
	/// Returns `true` if `self` is `Critical`
	pub fn is_critical(self) -> bool {
		self == Priority::Critical
	}
}

/// A priority assigned to execution of a PVF.
#[derive(Debug, Hash, PartialEq, Eq, PartialOrd, Ord, Clone, Copy)]
pub enum ExecutePriority {
	/// Low
	Low,
	/// Normall
	Normal,
	/// Critical
	Critical,
}

impl ExecutePriority {
	/// Returns an iterator over the variants of `ExecutePriority` in order from `Low` to
	/// `Critical`.
	pub fn iter() -> impl Iterator<Item = ExecutePriority> {
		[Self::Low, Self::Normal, Self::Critical].iter().copied()
	}

	/// Returns the next lower priority level, or `None` if `self` is `Low`.
	pub fn lower(&self) -> Option<Self> {
		match self {
			Self::Critical => Some(Self::Normal),
			Self::Normal => Some(Self::Low),
			Self::Low => None,
		}
	}

	/// Returns `true` if `self` is `Normal`
	pub fn is_normal(&self) -> bool {
		*self == Self::Normal
	}
}
