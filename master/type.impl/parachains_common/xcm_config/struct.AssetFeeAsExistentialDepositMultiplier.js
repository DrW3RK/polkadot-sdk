(function() {var type_impls = {
"asset_hub_rococo_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ChargeWeightInFungibles%3C%3CRuntime+as+Config%3E::AccountId,+Pallet%3CRuntime,+AssetInstance%3E%3E-for-AssetFeeAsExistentialDepositMultiplier%3CRuntime,+WeightToFee,+BalanceConverter,+AssetInstance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parachains_common/xcm_config.rs.html#35-47\">source</a><a href=\"#impl-ChargeWeightInFungibles%3C%3CRuntime+as+Config%3E::AccountId,+Pallet%3CRuntime,+AssetInstance%3E%3E-for-AssetFeeAsExistentialDepositMultiplier%3CRuntime,+WeightToFee,+BalanceConverter,+AssetInstance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;CurrencyBalance, Runtime, WeightToFee, BalanceConverter, AssetInstance&gt; <a class=\"trait\" href=\"cumulus_primitives_utility/trait.ChargeWeightInFungibles.html\" title=\"trait cumulus_primitives_utility::ChargeWeightInFungibles\">ChargeWeightInFungibles</a>&lt;&lt;Runtime as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>, Pallet&lt;Runtime, AssetInstance&gt;&gt; for <a class=\"struct\" href=\"parachains_common/xcm_config/struct.AssetFeeAsExistentialDepositMultiplier.html\" title=\"struct parachains_common::xcm_config::AssetFeeAsExistentialDepositMultiplier\">AssetFeeAsExistentialDepositMultiplier</a>&lt;Runtime, WeightToFee, BalanceConverter, AssetInstance&gt;<div class=\"where\">where\n    Runtime: Config&lt;AssetInstance&gt;,\n    WeightToFee: <a class=\"trait\" href=\"sp_weights/trait.WeightToFee.html\" title=\"trait sp_weights::WeightToFee\">WeightToFee</a>&lt;Balance = CurrencyBalance&gt;,\n    BalanceConverter: <a class=\"trait\" href=\"frame_support/traits/tokens/misc/trait.ConversionToAssetBalance.html\" title=\"trait frame_support::traits::tokens::misc::ConversionToAssetBalance\">ConversionToAssetBalance</a>&lt;CurrencyBalance, &lt;Runtime as Config&lt;AssetInstance&gt;&gt;::AssetId, &lt;Runtime as Config&lt;AssetInstance&gt;&gt;::Balance&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.charge_weight_in_fungibles\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parachains_common/xcm_config.rs.html#49-57\">source</a><a href=\"#method.charge_weight_in_fungibles\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cumulus_primitives_utility/trait.ChargeWeightInFungibles.html#tymethod.charge_weight_in_fungibles\" class=\"fn\">charge_weight_in_fungibles</a>(\n    asset_id: &lt;Pallet&lt;Runtime, AssetInstance&gt; as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;&lt;Runtime as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.AssetId\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::AssetId\">AssetId</a>,\n    weight: <a class=\"struct\" href=\"sp_weights/weight_v2/struct.Weight.html\" title=\"struct sp_weights::weight_v2::Weight\">Weight</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;Pallet&lt;Runtime, AssetInstance&gt; as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;&lt;Runtime as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.Balance\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::Balance\">Balance</a>, <a class=\"enum\" href=\"staging_xcm/v3/traits/enum.Error.html\" title=\"enum staging_xcm::v3::traits::Error\">Error</a>&gt;</h4></section></div></details>","ChargeWeightInFungibles<<Runtime as Config>::AccountId, Pallet<Runtime, AssetInstance>>","asset_hub_rococo_runtime::xcm_config::AssetFeeAsExistentialDepositMultiplierFeeCharger","asset_hub_rococo_runtime::xcm_config::ForeignAssetFeeAsExistentialDepositMultiplierFeeCharger"]],
"asset_hub_westend_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ChargeWeightInFungibles%3C%3CRuntime+as+Config%3E::AccountId,+Pallet%3CRuntime,+AssetInstance%3E%3E-for-AssetFeeAsExistentialDepositMultiplier%3CRuntime,+WeightToFee,+BalanceConverter,+AssetInstance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parachains_common/xcm_config.rs.html#35-47\">source</a><a href=\"#impl-ChargeWeightInFungibles%3C%3CRuntime+as+Config%3E::AccountId,+Pallet%3CRuntime,+AssetInstance%3E%3E-for-AssetFeeAsExistentialDepositMultiplier%3CRuntime,+WeightToFee,+BalanceConverter,+AssetInstance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;CurrencyBalance, Runtime, WeightToFee, BalanceConverter, AssetInstance&gt; <a class=\"trait\" href=\"cumulus_primitives_utility/trait.ChargeWeightInFungibles.html\" title=\"trait cumulus_primitives_utility::ChargeWeightInFungibles\">ChargeWeightInFungibles</a>&lt;&lt;Runtime as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>, Pallet&lt;Runtime, AssetInstance&gt;&gt; for <a class=\"struct\" href=\"parachains_common/xcm_config/struct.AssetFeeAsExistentialDepositMultiplier.html\" title=\"struct parachains_common::xcm_config::AssetFeeAsExistentialDepositMultiplier\">AssetFeeAsExistentialDepositMultiplier</a>&lt;Runtime, WeightToFee, BalanceConverter, AssetInstance&gt;<div class=\"where\">where\n    Runtime: Config&lt;AssetInstance&gt;,\n    WeightToFee: <a class=\"trait\" href=\"sp_weights/trait.WeightToFee.html\" title=\"trait sp_weights::WeightToFee\">WeightToFee</a>&lt;Balance = CurrencyBalance&gt;,\n    BalanceConverter: <a class=\"trait\" href=\"frame_support/traits/tokens/misc/trait.ConversionToAssetBalance.html\" title=\"trait frame_support::traits::tokens::misc::ConversionToAssetBalance\">ConversionToAssetBalance</a>&lt;CurrencyBalance, &lt;Runtime as Config&lt;AssetInstance&gt;&gt;::AssetId, &lt;Runtime as Config&lt;AssetInstance&gt;&gt;::Balance&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.charge_weight_in_fungibles\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parachains_common/xcm_config.rs.html#49-57\">source</a><a href=\"#method.charge_weight_in_fungibles\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cumulus_primitives_utility/trait.ChargeWeightInFungibles.html#tymethod.charge_weight_in_fungibles\" class=\"fn\">charge_weight_in_fungibles</a>(\n    asset_id: &lt;Pallet&lt;Runtime, AssetInstance&gt; as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;&lt;Runtime as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.AssetId\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::AssetId\">AssetId</a>,\n    weight: <a class=\"struct\" href=\"sp_weights/weight_v2/struct.Weight.html\" title=\"struct sp_weights::weight_v2::Weight\">Weight</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;Pallet&lt;Runtime, AssetInstance&gt; as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;&lt;Runtime as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.Balance\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::Balance\">Balance</a>, <a class=\"enum\" href=\"staging_xcm/v3/traits/enum.Error.html\" title=\"enum staging_xcm::v3::traits::Error\">Error</a>&gt;</h4></section></div></details>","ChargeWeightInFungibles<<Runtime as Config>::AccountId, Pallet<Runtime, AssetInstance>>","asset_hub_westend_runtime::xcm_config::AssetFeeAsExistentialDepositMultiplierFeeCharger","asset_hub_westend_runtime::xcm_config::ForeignAssetFeeAsExistentialDepositMultiplierFeeCharger"]],
"penpal_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ChargeWeightInFungibles%3C%3CRuntime+as+Config%3E::AccountId,+Pallet%3CRuntime,+AssetInstance%3E%3E-for-AssetFeeAsExistentialDepositMultiplier%3CRuntime,+WeightToFee,+BalanceConverter,+AssetInstance%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parachains_common/xcm_config.rs.html#35-47\">source</a><a href=\"#impl-ChargeWeightInFungibles%3C%3CRuntime+as+Config%3E::AccountId,+Pallet%3CRuntime,+AssetInstance%3E%3E-for-AssetFeeAsExistentialDepositMultiplier%3CRuntime,+WeightToFee,+BalanceConverter,+AssetInstance%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;CurrencyBalance, Runtime, WeightToFee, BalanceConverter, AssetInstance&gt; <a class=\"trait\" href=\"cumulus_primitives_utility/trait.ChargeWeightInFungibles.html\" title=\"trait cumulus_primitives_utility::ChargeWeightInFungibles\">ChargeWeightInFungibles</a>&lt;&lt;Runtime as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>, Pallet&lt;Runtime, AssetInstance&gt;&gt; for <a class=\"struct\" href=\"parachains_common/xcm_config/struct.AssetFeeAsExistentialDepositMultiplier.html\" title=\"struct parachains_common::xcm_config::AssetFeeAsExistentialDepositMultiplier\">AssetFeeAsExistentialDepositMultiplier</a>&lt;Runtime, WeightToFee, BalanceConverter, AssetInstance&gt;<div class=\"where\">where\n    Runtime: Config&lt;AssetInstance&gt;,\n    WeightToFee: <a class=\"trait\" href=\"sp_weights/trait.WeightToFee.html\" title=\"trait sp_weights::WeightToFee\">WeightToFee</a>&lt;Balance = CurrencyBalance&gt;,\n    BalanceConverter: <a class=\"trait\" href=\"frame_support/traits/tokens/misc/trait.ConversionToAssetBalance.html\" title=\"trait frame_support::traits::tokens::misc::ConversionToAssetBalance\">ConversionToAssetBalance</a>&lt;CurrencyBalance, &lt;Runtime as Config&lt;AssetInstance&gt;&gt;::AssetId, &lt;Runtime as Config&lt;AssetInstance&gt;&gt;::Balance&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.charge_weight_in_fungibles\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parachains_common/xcm_config.rs.html#49-57\">source</a><a href=\"#method.charge_weight_in_fungibles\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cumulus_primitives_utility/trait.ChargeWeightInFungibles.html#tymethod.charge_weight_in_fungibles\" class=\"fn\">charge_weight_in_fungibles</a>(\n    asset_id: &lt;Pallet&lt;Runtime, AssetInstance&gt; as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;&lt;Runtime as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.AssetId\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::AssetId\">AssetId</a>,\n    weight: <a class=\"struct\" href=\"sp_weights/weight_v2/struct.Weight.html\" title=\"struct sp_weights::weight_v2::Weight\">Weight</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;Pallet&lt;Runtime, AssetInstance&gt; as <a class=\"trait\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::fungibles::regular::Inspect\">Inspect</a>&lt;&lt;Runtime as <a class=\"trait\" href=\"frame_system/pallet/trait.Config.html\" title=\"trait frame_system::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"frame_system/pallet/trait.Config.html#associatedtype.AccountId\" title=\"type frame_system::pallet::Config::AccountId\">AccountId</a>&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/fungibles/regular/trait.Inspect.html#associatedtype.Balance\" title=\"type frame_support::traits::tokens::fungibles::regular::Inspect::Balance\">Balance</a>, <a class=\"enum\" href=\"staging_xcm/v3/traits/enum.Error.html\" title=\"enum staging_xcm::v3::traits::Error\">Error</a>&gt;</h4></section></div></details>","ChargeWeightInFungibles<<Runtime as Config>::AccountId, Pallet<Runtime, AssetInstance>>","penpal_runtime::xcm_config::ForeignAssetFeeAsExistentialDepositMultiplierFeeCharger"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()