(function() {var type_impls = {
"polkadot_test_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ShouldExecute-for-AllowUnpaidExecutionFrom%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/barriers.rs.html#269\">source</a><a href=\"#impl-ShouldExecute-for-AllowUnpaidExecutionFrom%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; ShouldExecute for <a class=\"struct\" href=\"staging_xcm_builder/barriers/struct.AllowUnpaidExecutionFrom.html\" title=\"struct staging_xcm_builder::barriers::AllowUnpaidExecutionFrom\">AllowUnpaidExecutionFrom</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"frame_support/traits/members/trait.Contains.html\" title=\"trait frame_support::traits::members::Contains\">Contains</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.should_execute\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/barriers.rs.html#270-275\">source</a><a href=\"#method.should_execute\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">should_execute</a>&lt;RuntimeCall&gt;(\n    origin: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>,\n    instructions: &amp;mut [<a class=\"enum\" href=\"staging_xcm/v4/enum.Instruction.html\" title=\"enum staging_xcm::v4::Instruction\">Instruction</a>&lt;RuntimeCall&gt;],\n    _max_weight: <a class=\"struct\" href=\"sp_weights/weight_v2/struct.Weight.html\" title=\"struct sp_weights::weight_v2::Weight\">Weight</a>,\n    _properties: &amp;mut Properties\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"frame_support/traits/messages/enum.ProcessMessageError.html\" title=\"enum frame_support::traits::messages::ProcessMessageError\">ProcessMessageError</a>&gt;</h4></section></summary><div class='docblock'>Returns <code>Ok(())</code> if the given <code>message</code> may be executed. <a>Read more</a></div></details></div></details>","ShouldExecute","polkadot_test_runtime::xcm_config::Barrier"]],
"xcm_fuzzer":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ShouldExecute-for-AllowUnpaidExecutionFrom%3CT%3E\" class=\"impl\"><a href=\"#impl-ShouldExecute-for-AllowUnpaidExecutionFrom%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; ShouldExecute for AllowUnpaidExecutionFrom&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"frame_support/traits/members/trait.Contains.html\" title=\"trait frame_support::traits::members::Contains\">Contains</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.should_execute\" class=\"method trait-impl\"><a href=\"#method.should_execute\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">should_execute</a>&lt;RuntimeCall&gt;(\n    origin: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>,\n    instructions: &amp;mut [<a class=\"enum\" href=\"staging_xcm/v4/enum.Instruction.html\" title=\"enum staging_xcm::v4::Instruction\">Instruction</a>&lt;RuntimeCall&gt;],\n    _max_weight: <a class=\"struct\" href=\"sp_weights/weight_v2/struct.Weight.html\" title=\"struct sp_weights::weight_v2::Weight\">Weight</a>,\n    _properties: &amp;mut Properties\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"frame_support/traits/messages/enum.ProcessMessageError.html\" title=\"enum frame_support::traits::messages::ProcessMessageError\">ProcessMessageError</a>&gt;</h4></section></summary><div class='docblock'>Returns <code>Ok(())</code> if the given <code>message</code> may be executed. <a>Read more</a></div></details></div></details>","ShouldExecute","xcm_fuzzer::parachain::Barrier","xcm_fuzzer::relay_chain::Barrier"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()