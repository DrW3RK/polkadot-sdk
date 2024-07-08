(function() {var implementors = {
"pallet_asset_conversion":[["impl&lt;Seed, PoolId, AccountId&gt; TryConvert&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;PoolId</a>, AccountId&gt; for <a class=\"struct\" href=\"pallet_asset_conversion/struct.AccountIdConverter.html\" title=\"struct pallet_asset_conversion::AccountIdConverter\">AccountIdConverter</a>&lt;Seed, PoolId&gt;<div class=\"where\">where\n    PoolId: Encode,\n    AccountId: Decode,\n    Seed: Get&lt;PalletId&gt;,</div>"],["impl&lt;PoolId, AccountId&gt; TryConvert&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;PoolId</a>, AccountId&gt; for <a class=\"struct\" href=\"pallet_asset_conversion/struct.AccountIdConverterNoSeed.html\" title=\"struct pallet_asset_conversion::AccountIdConverterNoSeed\">AccountIdConverterNoSeed</a>&lt;PoolId&gt;<div class=\"where\">where\n    PoolId: Encode,\n    AccountId: Decode,</div>"]],
"polkadot_runtime_common":[["impl TryConvert&lt;&amp;<a class=\"enum\" href=\"staging_xcm/enum.VersionedLocation.html\" title=\"enum staging_xcm::VersionedLocation\">VersionedLocation</a>, <a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt; for <a class=\"struct\" href=\"polkadot_runtime_common/impls/struct.VersionedLocationConverter.html\" title=\"struct polkadot_runtime_common::impls::VersionedLocationConverter\">VersionedLocationConverter</a>"],["impl TryConvert&lt;<a class=\"enum\" href=\"polkadot_runtime_common/impls/enum.VersionedLocatableAsset.html\" title=\"enum polkadot_runtime_common::impls::VersionedLocatableAsset\">VersionedLocatableAsset</a>, LocatableAssetId&gt; for <a class=\"struct\" href=\"polkadot_runtime_common/impls/struct.LocatableAssetConverter.html\" title=\"struct polkadot_runtime_common::impls::LocatableAssetConverter\">LocatableAssetConverter</a>"]],
"polkadot_sdk_frame":[],
"polkadot_service":[],
"sp_runtime":[],
"staging_xcm_builder":[["impl&lt;RuntimeOrigin: OriginTrait + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, COrigin: GetBacking, Body: Get&lt;<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.BodyId.html\" title=\"enum staging_xcm_builder::test_utils::BodyId\">BodyId</a>&gt;&gt; TryConvert&lt;RuntimeOrigin, <a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.BackingToPlurality.html\" title=\"struct staging_xcm_builder::BackingToPlurality\">BackingToPlurality</a>&lt;RuntimeOrigin, COrigin, Body&gt;<div class=\"where\">where\n    RuntimeOrigin::PalletsOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;COrigin&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;COrigin, Error = RuntimeOrigin::PalletsOrigin&gt;,</div>"],["impl&lt;FixedLocationValue: Get&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>&gt;, AssetKind: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.AssetId.html\" title=\"struct staging_xcm_builder::test_utils::AssetId\">AssetId</a>&gt;&gt; TryConvert&lt;AssetKind, <a class=\"struct\" href=\"staging_xcm_builder/struct.LocatableAssetId.html\" title=\"struct staging_xcm_builder::LocatableAssetId\">LocatableAssetId</a>&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.FixedLocation.html\" title=\"struct staging_xcm_builder::FixedLocation\">FixedLocation</a>&lt;FixedLocationValue&gt;"],["impl&lt;'a, Network: Get&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.NetworkId.html\" title=\"enum staging_xcm_builder::test_utils::NetworkId\">NetworkId</a>&gt;&gt;, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">32</a>]&gt;&gt; TryConvert&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;'a AccountId</a>, <a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.AliasesIntoAccountId32.html\" title=\"struct staging_xcm_builder::AliasesIntoAccountId32\">AliasesIntoAccountId32</a>&lt;Network, AccountId&gt;"],["impl&lt;RuntimeOrigin: OriginTrait + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">32</a>]&gt;, Network: Get&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.NetworkId.html\" title=\"enum staging_xcm_builder::test_utils::NetworkId\">NetworkId</a>&gt;&gt;&gt; TryConvert&lt;RuntimeOrigin, <a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.SignedToAccountId32.html\" title=\"struct staging_xcm_builder::SignedToAccountId32\">SignedToAccountId32</a>&lt;RuntimeOrigin, AccountId, Network&gt;<div class=\"where\">where\n    RuntimeOrigin::PalletsOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;RawOrigin&lt;AccountId&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;RawOrigin&lt;AccountId&gt;, Error = RuntimeOrigin::PalletsOrigin&gt;,</div>"],["impl&lt;RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, EnsureBodyOrigin: EnsureOrigin&lt;RuntimeOrigin&gt;, Body: Get&lt;<a class=\"enum\" href=\"staging_xcm_builder/test_utils/enum.BodyId.html\" title=\"enum staging_xcm_builder::test_utils::BodyId\">BodyId</a>&gt;&gt; TryConvert&lt;RuntimeOrigin, <a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>&gt; for <a class=\"struct\" href=\"staging_xcm_builder/struct.OriginToPluralityVoice.html\" title=\"struct staging_xcm_builder::OriginToPluralityVoice\">OriginToPluralityVoice</a>&lt;RuntimeOrigin, EnsureBodyOrigin, Body&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()