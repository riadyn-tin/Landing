/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: BaraV (https://sketchfab.com/BaraV)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cartoon-chicken-465519acf2ad43209055b3b6e8787849
Title: Cartoon Chicken
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import {useEffect} from "react";

import scene from '../assets/3d/chicken.glb'

export function Chicken({ currentAnimation, ...props}) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {

  }, [actions, currentAnimation])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model">
          <group name="HaenaGoggfbx">
            <group name="Object_2">
              <group name="RootNode">
                <group name="modelGEO">
                  <group name="modelhaena_exportedMesh" />
                </group>
                <group name="left" position={[-1000.1, 29.163, 19.236]}>
                  <group name="Object_7" />
                </group>
                <group name="Group">
                  <group name="Main">
                    <group name="FitSkeleton" />
                    <group name="MotionSystem">
                      <group name="FKSystem">
                        <group
                          name="FKParentConstraintToRoot_M"
                          position={[0, 27.477, 7.675]}
                          rotation={[1.767, 1.398, Math.PI / 2]}
                        >
                          <group
                            name="FKOffsetHip_R"
                            position={[-1.349, 12.036, -6.216]}
                            rotation={[Math.PI, 0, -2.565]}
                          >
                            <group name="FKExtraHip_R">
                              <group name="FKHip_R" />
                            </group>
                          </group>
                          <group
                            name="FKOffsetTail1_M"
                            position={[-6.506, -8.353, 0]}
                            rotation={[Math.PI, 0, 2.077]}
                          >
                            <group name="FKExtraTail1_M">
                              <group name="FKTail1_M" />
                            </group>
                          </group>
                          <group
                            name="FKOffsetHip_L"
                            position={[-1.349, 12.036, 6.216]}
                            rotation={[Math.PI, 0, 0.576]}
                          >
                            <group name="FKExtraHip_L">
                              <group name="FKHip_L" />
                            </group>
                          </group>
                        </group>
                        <group
                          name="FKParentConstraintToChest_M"
                          position={[0, 19.048, 19.771]}
                          rotation={[-2.681, Math.PI / 2, 0]}
                        >
                          <group
                            name="FKOffsetNeck_M"
                            position={[11.578, 0, 0]}
                            rotation={[0, 0, 0.093]}
                          >
                            <group name="FKExtraNeck_M">
                              <group name="FKNeck_M" />
                            </group>
                          </group>
                        </group>
                        <group
                          name="FKOffsetRoot_M"
                          position={[0, 30.191, -3.234]}
                          rotation={[2.636, Math.PI / 2, 0]}
                        >
                          <group name="FKExtraRoot_M">
                            <group
                              name="FKRoot_M"
                              position={[8.231, 7.656, 0]}
                              rotation={[0, 0, 0.702]}
                            />
                          </group>
                        </group>
                      </group>
                      <group name="IKSystem">
                        <group name="IKJoints">
                          <group
                            name="IKParentConstraintHip_R"
                            position={[0, 27.477, 7.675]}
                            rotation={[1.767, 1.398, Math.PI / 2]}
                          >
                            <group
                              name="IKXOffsetHip_R"
                              position={[-1.349, 12.036, -6.216]}
                              rotation={[Math.PI, 0, -2.565]}
                            />
                            <group
                              name="IKMessureFromHip_R"
                              position={[-1.349, 12.036, -6.216]}
                              rotation={[Math.PI, 0, -2.565]}
                            />
                          </group>
                          <group
                            name="IKParentConstraintRoot_M"
                            position={[0, 30.191, -3.234]}
                            rotation={[2.636, Math.PI / 2, 0]}
                          />
                          <group
                            name="IKParentConstraintHip_L"
                            position={[0, 27.477, 7.675]}
                            rotation={[1.767, 1.398, Math.PI / 2]}
                          >
                            <group
                              name="IKXOffsetHip_L"
                              position={[-1.349, 12.036, 6.216]}
                              rotation={[Math.PI, 0, 0.576]}
                            />
                            <group
                              name="IKMessureFromHip_L"
                              position={[-1.349, 12.036, 6.216]}
                              rotation={[Math.PI, 0, 0.576]}
                            />
                          </group>
                          <group
                            name="IKSpSpineOffset_M"
                            position={[0, 30.191, -3.234]}
                            rotation={[2.636, Math.PI / 2, 0]}
                          />
                          <group
                            name="IKAcSpineOffset_M"
                            position={[0, 30.191, -3.234]}
                            rotation={[2.636, Math.PI / 2, 0]}
                          />
                          <group name="IKAcSpineOffset3_M">
                            <group
                              name="IKAcPociXformRoot_M"
                              position={[0, 30.191, -3.234]}
                            />
                            <group
                              name="IKAcPociXformSpine1_M"
                              position={[0, 33.748, 3.194]}
                            />
                            <group
                              name="IKAcPociXformChest_M"
                              position={[0, 38.117, 10.526]}
                            />
                          </group>
                          <group
                            name="IKAcSpineOffset2_M"
                            position={[0, 30.191, -3.234]}
                            rotation={[2.636, Math.PI / 2, 0]}
                          >
                            <group
                              name="IKAcSpine1FollowOffset_M"
                              position={[7.346, 0, 0]}
                              rotation={[0, 0, -0.032]}
                            />
                            <group
                              name="IKAcChestFollowOffset_M"
                              position={[15.877, -0.272, 0]}
                              rotation={[0, 0, -0.542]}
                            />
                          </group>
                        </group>
                        <group name="IKHandle">
                          <group name="IKRootConstraint" />
                          <group
                            name="IKOffsetLeg_R"
                            position={[-6.216, 1.881, 0.225]}
                          >
                            <group name="IKExtraLeg_R">
                              <group name="IKLeg_R">
                                <group
                                  name="IKFKAlignedOffsetLeg_R"
                                  rotation={[Math.PI / 2, -1.571, 0]}
                                >
                                  <group name="IKFKAlignedLeg_R" />
                                </group>
                                <group name="IKLegFootRoll_R" />
                                <group
                                  name="RollOffsetHeel_R"
                                  position={[0, -1.861, -5.617]}
                                >
                                  <group name="RollRollerHeel_R">
                                    <group name="RollExtraHeel_R">
                                      <group name="RollHeel_R">
                                        <group
                                          name="RollOffsetToesEnd_R"
                                          position={[0.001, 0.001, 13.067]}
                                        >
                                          <group name="RollRollerToesEnd_R">
                                            <group name="RollExtraToesEnd_R">
                                              <group name="RollToesEnd_R">
                                                <group
                                                  name="RollOffsetToes_R"
                                                  position={[
                                                    0.001, 0.8, -6.473,
                                                  ]}
                                                >
                                                  <group name="RollRollerToes_R">
                                                    <group name="RollExtraToes_R">
                                                      <group name="RollToes_R">
                                                        <group
                                                          name="IKAnkleHandle_R"
                                                          rotation={[
                                                            Math.PI / 2,
                                                            -Math.PI / 2,
                                                            0,
                                                          ]}
                                                        />
                                                        <group
                                                          name="IKLegHandle_R"
                                                          position={[
                                                            0, 1.061, -0.977,
                                                          ]}
                                                        />
                                                        <group
                                                          name="IKmessureConstrainToLeg_R"
                                                          position={[
                                                            0, 1.061, -0.977,
                                                          ]}
                                                        />
                                                      </group>
                                                    </group>
                                                  </group>
                                                </group>
                                                <group
                                                  name="IKOffsetToes_R"
                                                  position={[
                                                    0.001, 0.8, -6.473,
                                                  ]}
                                                >
                                                  <group name="IKExtraToes_R">
                                                    <group name="IKToes_R">
                                                      <group
                                                        name="IKToesHandle_R"
                                                        position={[
                                                          -0.001, -0.8, 6.473,
                                                        ]}
                                                        rotation={[
                                                          0.123,
                                                          -Math.PI / 2,
                                                          0,
                                                        ]}
                                                      />
                                                    </group>
                                                  </group>
                                                </group>
                                              </group>
                                            </group>
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                          <group
                            name="PoleOffsetLeg_R"
                            position={[-6.454, 16.497, -12.997]}
                            rotation={[0.405, -0.002, -0.014]}
                          >
                            <group name="PoleExtraLeg_R">
                              <group name="PoleLeg_R" />
                            </group>
                          </group>
                          <group
                            name="PoleAimLeg_R"
                            position={[0, 27.477, 7.675]}
                            rotation={[-1.289, -1.342, 3.14]}
                          />
                          <group
                            name="IKSpineHandle_M"
                            position={[0, 38.117, 10.526]}
                            rotation={[2.636, Math.PI / 2, 0]}
                          />
                          <group
                            name="IKOffsetcvSpine1_M"
                            position={[0, 33.748, 3.194]}
                          >
                            <group name="IKExtracvSpine1_M">
                              <group name="IKcvSpine1_M">
                                <group name="IKSpineLocator1_M" />
                              </group>
                            </group>
                          </group>
                          <group
                            name="IKOffsetSpine2_M"
                            position={[0, 34.052, 3.704]}
                          >
                            <group name="IKExtraSpine2_M">
                              <group name="IKSpine2_M">
                                <group
                                  name="IKSpine2LocalOrient1_M"
                                  rotation={[2.636, Math.PI / 2, 0]}
                                >
                                  <group name="IKSpine2LocalOrient2_M" />
                                </group>
                              </group>
                            </group>
                            <group
                              name="IKSpine2LocalOrient3_M"
                              rotation={[2.636, Math.PI / 2, 0]}
                            />
                          </group>
                          <group
                            name="IKOffsetConstrainedSpine1_M"
                            position={[0, 30.191, -3.234]}
                          >
                            <group
                              name="IKhybridOffsetSpine1_M"
                              rotation={[2.636, Math.PI / 2, 0]}
                            >
                              <group name="IKhybridFollowSpine1_M">
                                <group name="IKhybridExtraSpine1_M">
                                  <group name="IKhybridSpine1_M">
                                    <group
                                      name="IKOffsetSpine1_M"
                                      rotation={[
                                        -Math.PI / 2,
                                        1.065,
                                        -Math.PI / 2,
                                      ]}
                                    >
                                      <group name="IKExtraSpine1_M">
                                        <group name="IKSpine1_M">
                                          <group name="IKSpineLocator0_M" />
                                          <group
                                            name="IKSpine1LocalOrient1_M"
                                            rotation={[2.636, Math.PI / 2, 0]}
                                          >
                                            <group name="IKSpine1LocalOrient2_M">
                                              <group name="IKSpine1LocalOrient3_M" />
                                            </group>
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                    <group
                                      name="IKhybridOffsetSpine2_M"
                                      position={[7.94, -0.019, 0]}
                                    >
                                      <group name="IKhybridExtraSpine2_M">
                                        <group name="IKhybridSpine2_M">
                                          <group
                                            name="IKhybridOffsetSpine3_M"
                                            position={[7.937, -0.253, 0]}
                                          >
                                            <group name="IKhybridExtraSpine3_M">
                                              <group name="IKhybridSpine3_M">
                                                <group
                                                  name="IKOffsetSpine3_M"
                                                  rotation={[
                                                    -Math.PI / 2,
                                                    1.065,
                                                    -Math.PI / 2,
                                                  ]}
                                                >
                                                  <group name="IKExtraSpine3_M">
                                                    <group name="IKSpine3_M">
                                                      <group name="IKSpineLocator2_M" />
                                                      <group
                                                        name="IKSpine3LocalOrient1_M"
                                                        rotation={[
                                                          2.094,
                                                          Math.PI / 2,
                                                          0,
                                                        ]}
                                                      >
                                                        <group name="IKSpine3LocalOrient2_M" />
                                                      </group>
                                                      <group
                                                        name="IKSpine3LocalStartOrient_M"
                                                        rotation={[
                                                          2.636,
                                                          Math.PI / 2,
                                                          0,
                                                        ]}
                                                      />
                                                    </group>
                                                  </group>
                                                </group>
                                              </group>
                                            </group>
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                          <group name="IKFollowEndSpine_M">
                            <group
                              name="IKFollowEndSpine1_M"
                              position={[0, 30.191, -3.234]}
                            />
                            <group
                              name="IKFollowEndSpine3_M"
                              position={[0, 38.117, 10.526]}
                            />
                          </group>
                          <group
                            name="IKOffsetLeg_L"
                            position={[6.216, 1.881, 0.225]}
                          >
                            <group name="IKExtraLeg_L">
                              <group name="IKLeg_L">
                                <group
                                  name="IKFKAlignedOffsetLeg_L"
                                  rotation={[-Math.PI / 2, -1.571, 0]}
                                >
                                  <group name="IKFKAlignedLeg_L" />
                                </group>
                                <group name="IKLegFootRoll_L" />
                                <group
                                  name="RollOffsetHeel_L"
                                  position={[0, -1.861, -5.617]}
                                >
                                  <group name="RollRollerHeel_L">
                                    <group name="RollExtraHeel_L">
                                      <group name="RollHeel_L">
                                        <group
                                          name="RollOffsetToesEnd_L"
                                          position={[-0.001, 0.001, 13.067]}
                                        >
                                          <group name="RollRollerToesEnd_L">
                                            <group name="RollExtraToesEnd_L">
                                              <group name="RollToesEnd_L">
                                                <group
                                                  name="RollOffsetToes_L"
                                                  position={[
                                                    -0.001, 0.8, -6.473,
                                                  ]}
                                                >
                                                  <group name="RollRollerToes_L">
                                                    <group name="RollExtraToes_L">
                                                      <group name="RollToes_L">
                                                        <group
                                                          name="IKAnkleHandle_L"
                                                          rotation={[
                                                            -Math.PI / 2,
                                                            -Math.PI / 2,
                                                            0,
                                                          ]}
                                                        />
                                                        <group
                                                          name="IKLegHandle_L"
                                                          position={[
                                                            0, 1.061, -0.977,
                                                          ]}
                                                        />
                                                        <group
                                                          name="IKmessureConstrainToLeg_L"
                                                          position={[
                                                            0, 1.061, -0.977,
                                                          ]}
                                                        />
                                                      </group>
                                                    </group>
                                                  </group>
                                                </group>
                                                <group
                                                  name="IKOffsetToes_L"
                                                  position={[
                                                    -0.001, 0.8, -6.473,
                                                  ]}
                                                >
                                                  <group name="IKExtraToes_L">
                                                    <group name="IKToes_L">
                                                      <group
                                                        name="IKToesHandle_L"
                                                        position={[
                                                          0.001, -0.8, 6.473,
                                                        ]}
                                                        rotation={[
                                                          -3.019,
                                                          -Math.PI / 2,
                                                          0,
                                                        ]}
                                                      />
                                                    </group>
                                                  </group>
                                                </group>
                                              </group>
                                            </group>
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                          <group
                            name="PoleOffsetLeg_L"
                            position={[6.454, 16.497, -12.997]}
                            rotation={[0.405, 0.002, 0.014]}
                          >
                            <group name="PoleExtraLeg_L">
                              <group name="PoleLeg_L" />
                            </group>
                          </group>
                          <group
                            name="PoleAimLeg_L"
                            position={[0, 27.477, 7.675]}
                            rotation={[1.853, -1.342, -0.001]}
                          />
                          <group name="IKScalerRoot_M" />
                          <group name="IKScalerSpine1_M" />
                          <group name="IKScalerChest_M" />
                        </group>
                        <group name="IKFollow">
                          <group
                            name="PoleOffsetLeg_RFollowNoScaleOffset"
                            position={[0, 27.477, 7.675]}
                            rotation={[-1.289, -1.342, 3.14]}
                          >
                            <group name="PoleOffsetLeg_RFollowNoScale" />
                          </group>
                          <group
                            name="PoleOffsetLeg_RFollowOffset"
                            position={[-6.216, 11.865, -17.899]}
                          >
                            <group
                              name="PoleOffsetLeg_RFollow"
                              position={[-0.237, 4.632, 4.902]}
                              rotation={[0.405, -0.002, -0.014]}
                            />
                          </group>
                          <group
                            name="IKhybridFollowSpine1_MFollowNoScaleOffset"
                            position={[0, 30.191, -3.234]}
                          >
                            <group name="IKhybridFollowSpine1_MFollowNoScale" />
                          </group>
                          <group
                            name="IKhybridFollowSpine1_MFollowOffset"
                            position={[0, 30.191, -3.234]}
                            rotation={[2.636, Math.PI / 2, 0]}
                          >
                            <group name="IKhybridFollowSpine1_MFollow" />
                          </group>
                          <group
                            name="PoleOffsetLeg_LFollowNoScaleOffset"
                            position={[0, 27.477, 7.675]}
                            rotation={[1.853, -1.342, -0.001]}
                          >
                            <group name="PoleOffsetLeg_LFollowNoScale" />
                          </group>
                          <group
                            name="PoleOffsetLeg_LFollowOffset"
                            position={[6.216, 11.865, -17.899]}
                          >
                            <group
                              name="PoleOffsetLeg_LFollow"
                              position={[0.237, 4.632, 4.902]}
                              rotation={[0.405, 0.002, 0.014]}
                            />
                          </group>
                        </group>
                        <group name="IKStatic">
                          <group
                            name="PoleOffsetLeg_RStaticOffset"
                            position={[-6.216, 11.865, -17.899]}
                          >
                            <group name="PoleOffsetLeg_RStatic" />
                          </group>
                          <group
                            name="IKhybridFollowSpine1_MStaticOffset"
                            position={[0, 30.191, -3.234]}
                            rotation={[2.636, Math.PI / 2, 0]}
                          >
                            <group name="IKhybridFollowSpine1_MStatic" />
                          </group>
                          <group
                            name="PoleOffsetLeg_LStaticOffset"
                            position={[6.216, 11.865, -17.899]}
                          >
                            <group name="PoleOffsetLeg_LStatic" />
                          </group>
                        </group>
                        <group name="IKCurve">
                          <group name="IKSpineCurve_M" />
                        </group>
                        <group name="IKMessure">
                          <group
                            name="IKmessureLoc1Leg_R"
                            position={[-8.195, 17.162, 4.244]}
                          >
                            <group
                              name="IKmessureLoc2Leg_R"
                              position={[1.978, -15.281, -4.019]}
                            />
                          </group>
                          <group name="IKdistanceLeg_R" />
                          <group
                            name="IKmessureLoc1Leg_L"
                            position={[4.053, 15.064, 3.826]}
                          >
                            <group
                              name="IKmessureLoc2Leg_L"
                              position={[2.164, -13.183, -3.6]}
                            />
                          </group>
                          <group name="IKdistanceLeg_L" />
                        </group>
                      </group>
                      <group name="FKIKSystem">
                        <group
                          name="FKIKParentConstraintLeg_R"
                          position={[0, 27.477, 7.675]}
                          rotation={[1.767, 1.398, Math.PI / 2]}
                        >
                          <group
                            name="FKIKLeg_R"
                            position={[-4.411, 14.026, -9.8]}
                            rotation={[-Math.PI / 2, 1.065, -Math.PI / 2]}
                          />
                        </group>
                        <group
                          name="FKIKParentConstraintSpine_M"
                          position={[0, 27.477, 7.675]}
                          rotation={[1.767, 1.398, Math.PI / 2]}
                        >
                          <group
                            name="FKIKSpine_M"
                            position={[3.652, 0, 8.077]}
                            rotation={[-Math.PI / 2, 1.065, -Math.PI / 2]}
                          />
                        </group>
                        <group
                          name="FKIKParentConstraintLeg_L"
                          position={[0, 27.477, 7.675]}
                          rotation={[1.767, 1.398, Math.PI / 2]}
                        >
                          <group
                            name="FKIKLeg_L"
                            position={[-4.411, 14.026, 9.8]}
                            rotation={[-Math.PI / 2, 1.065, -Math.PI / 2]}
                          />
                        </group>
                      </group>
                      <group name="BendSystem" />
                      <group name="AimSystem" />
                      <group name="RootSystem">
                        <group
                          name="LegLockConstrained"
                          position={[0, 27.477, 7.675]}
                          rotation={[1.767, 1.398, Math.PI / 2]}
                        />
                        <group
                          name="RootCenterBtwLegsBlended_M"
                          position={[0, 30.191, -3.234]}
                        >
                          <group name="RootOffsetX_M">
                            <group name="RootExtraX_M">
                              <group name="RootX_M">
                                <group
                                  name="RootZeroXform"
                                  position={[0, -30.191, 3.234]}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                        <group
                          name="RootCenter_M"
                          position={[0, 30.191, -3.234]}
                        />
                        <group
                          name="RootCenterBtwLegs_M"
                          position={[0, 30.191, 0.225]}
                        >
                          <group
                            name="RootCenterBtwLegsOffset_M"
                            position={[0, 0, -3.459]}
                          />
                        </group>
                      </group>
                      <group name="TwistSystem">
                        <group
                          name="TwistFollowOffsetChest_M"
                          position={[0, 38.117, 10.526]}
                          rotation={[2.094, Math.PI / 2, 0]}
                        >
                          <group name="TwistFollowChest_M">
                            <group
                              name="UnTwistIKChest_M"
                              position={[3.403, 0, 0]}
                              rotation={[-Math.PI / 2, 0.524, -Math.PI / 2]}
                            />
                          </group>
                        </group>
                        <group
                          name="TwistFollowParentOffsetChest_M"
                          position={[0, 30.191, -3.234]}
                          rotation={[2.636, Math.PI / 2, 0]}
                        >
                          <group name="TwistFollowParentChest_M" />
                        </group>
                        <group
                          name="TwistFollowOffsetSpine2_M"
                          position={[0, 34.052, 3.704]}
                          rotation={[2.636, Math.PI / 2, 0]}
                        >
                          <group name="TwistFollowSpine2_M">
                            <group
                              name="UnTwistIKSpine2_M"
                              position={[4.869, 0, 0]}
                              rotation={[-Math.PI / 2, 1.065, -Math.PI / 2]}
                            />
                          </group>
                        </group>
                        <group
                          name="TwistFollowParentOffsetSpine2_M"
                          position={[0, 34.052, 3.704]}
                          rotation={[2.636, Math.PI / 2, 0]}
                        >
                          <group name="TwistFollowParentSpine2_M" />
                        </group>
                      </group>
                      <group name="GlobalSystem">
                        <group
                          name="GlobalOffsetHead_M"
                          position={[0, 53.245, 19.932]}
                          rotation={[Math.PI / 2, Math.PI / 2, 0]}
                        >
                          <group name="GlobalHead_M" />
                        </group>
                      </group>
                      <group name="ConstraintSystem" />
                      <group name="DynamicSystem" />
                    </group>
                    <group name="DeformationSystem">
                      <group name="Object_215">
                        <primitive object={nodes._rootJoint} />
                        <skinnedMesh
                          name="Object_218"
                          geometry={nodes.Object_218.geometry}
                          material={materials.modelphong1}
                          skeleton={nodes.Object_218.skeleton}
                        />
                        <group name="Object_217" />
                      </group>
                    </group>
                  </group>
                  <group name="Geometry" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/cartoon_chicken.glb");
