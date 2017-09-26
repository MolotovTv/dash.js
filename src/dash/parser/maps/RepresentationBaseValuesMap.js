/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @classdesc a RepresentationBaseValuesMap type for input to objectiron
 */
import MapNode from './MapNode';

/*
 * As described in chapter 5.3.7 of the DASH standard, the elements
 * AdaptationSet, Representation and SubRepresentation have common attributes
 * and sub-elements. The attributes and elements listed in the commonProperties
 * variable below may be present in all three elements.
 *
 * Chapter 5.3.3.1 indicates that any of the common attributes shall only be
 * present either in the AdaptationSet element or in the Representation element,
 * not in both.
 *
 * Note also that Representation ans SubRepresentation elements are optional.
 *
 * As the AdaptationSet element is a parent of the Representation element, which
 * is itself a parent of the SubRepresentation element, this class is used by
 * the ObjectIron class to map the common properties of the parent element to
 * the children elements recursively.
 */
class RepresentationBaseValuesMap extends MapNode {
    constructor() {
        const commonProperties = [
            'profiles', 'width', 'height', 'sar', 'frameRate',
            'audioSamplingRate', 'mimeType','segmentProfiles', 'codecs',
            'maximumSAPPeriod', 'startWithSAP', 'maxPlayoutRate',
            'codingDependency', 'scanType', 'FramePacking',
            'AudioChannelConfiguration', 'ContentProtection',
            'EssentialProperty', 'SupplementalProperty', 'InbandEventStream'
        ];

        super('AdaptationSet', commonProperties, [
            new MapNode('Representation', commonProperties, [
                new MapNode('SubRepresentation', commonProperties)
            ])
        ]);
    }
}

export default RepresentationBaseValuesMap;
